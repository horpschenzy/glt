<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Extension;
use App\Models\Member;
use Auth;
use Carbon\Carbon;
class DashboardController extends Controller

{

    public function view(){
        $extensions = Extension::all();
        return Inertia::render('DashboardHomeComponent',['extensions'=>$extensions]);
    }
    public function index()
    {
        $stats = [];
        $stats['extensions'] = Extension::all()->count();
       if (session('extension_id') == 'glt') {
            $stats['existing'] = Member::where('id','!=',0)->count();
            $stats['newly'] = Member::whereDate('created_at', Carbon::today())->count();
        }else{
            $stats['existing'] = Member::where('extension_id',session('extension_id') )->count();
            $stats['new'] = Member::where('extension_id',session('extension_id'))->whereDate('created_at', Carbon::today())->count();
        }

        return Inertia::render('DashboardComponent',['stats' => $stats]);
    }

    public function changeExtension( $id){
        session()->forget('extension_id');
        session(['extension_id'=> $id]);
    }
}
