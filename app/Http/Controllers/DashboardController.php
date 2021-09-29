<?php

namespace App\Http\Controllers;

use Auth;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Follow;
use App\Models\Member;
use App\Models\Feedback;
use App\Models\Extension;
use Illuminate\Http\Request;

class DashboardController extends Controller

{

    public function view(){
        if (session('extension_id') == 'glt' || Auth::user()->roles[0]->name == 'super-admin') {
            Extension::changeLayout('normal');
            $extensions = Extension::all();
            return Inertia::render('DashboardHomeComponent',['extensions'=>$extensions]);
        }
        else{
            return redirect()->route('dashboard');
        }
    }
    public function index()
    {
        Extension::changeLayout('normal');
        $stats = [];
        $stats['extensions'] = Extension::all()->count();
       if (session('extension_id') == 'glt') {
            $stats['foundation'] = Member::where('status','Foundation School')->count();
            $stats['steward'] = Member::where('status','Steward')->count();
            $stats['new'] = Member::where('status','Guest')->count();
            $stats['events'] = Event::where('id','!=',0)->count();
        }else{
            if (Auth::user()->roles[0]->name == 'super-admin' || Auth::user()->roles[0]->name == 'admin' ) {
                $stats['foundation'] = Member::where('extension_id',session('extension_id') )->where('status','Foundation School')->count();
                $stats['steward'] = Member::where('extension_id',session('extension_id') )->where('status','Steward')->count();
                $stats['new'] = Member::where('extension_id',session('extension_id'))->where('status','Guest')->count();
                $stats['events'] = Event::where('extension_id',session('extension_id'))->count();
            }
            elseif (Auth::user()->roles[0]->name == 'head-of-ministry') {
                $stats['members'] = Member::where('extension_id',session('extension_id') )->pluck('id')->toArray();
                $stats['new'] = Member::where('extension_id',session('extension_id'))->where('status', 'Guest')->count();
                $stats['assigned'] = Follow::whereIn('member_id',$stats['members'])->count();
                $stats['texts'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Text')->count();
                $stats['visits'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Visited')->count();
                $stats['calls'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Called')->count();
                $stats['emails'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Sent Email')->count();

            }
        }

        return Inertia::render('DashboardComponent',['stats' => $stats]);
    }

    public function changeExtension( $id){
        session()->forget('extension_id');
        session(['extension_id'=> $id]);
    }
}
