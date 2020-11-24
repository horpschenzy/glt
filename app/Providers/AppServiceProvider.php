<?php

namespace App\Providers;

use URL;
use Inertia\Inertia;
use App\Models\Extension;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });



        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                        'extension_name' => (Auth::user()->extension) ? Auth::user()->extension->ext_name : Auth::user()->roles[0]->name,
                        'role' => Auth::user()->roles[0]->name,
                        'extension_id' => session(`extension_id`),
                        'ext_name' => session(`extension_id`) == 'glt' ? '': Extension::getExtensionName(session(`extension_id`)),

                    ] : null,
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            'ref_url' => function (){
                return URL::to('/');
            }
        ]);
    }
}
