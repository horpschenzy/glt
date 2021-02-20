<?php

namespace App\Http\Controllers;

use App\User;
use App\Mail\Testing;
use App\Models\Event;
use App\Models\Member;
use App\Models\CheckIn;
use App\Models\Extension;
use Illuminate\Http\Request;
use App\Mail\UserRegisteration;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{

    public function testmail()
    {
        Mail::to('opeoluwa.lanre@gmail.com')->send(new Testing());
    }
    public function checkIn($user, $event_id)
    {
        CheckIn::create([
                    'user_id' => $user,
                    'event_id' => $event_id,
                    'status' => 'pending',
                ]);
    }

    public function registerUser(Request $request, $event_code)
    {
        $input = $request->all();
        $validate  = Validator::make($input, [
            'first_name' => 'required',
            'last_name' => 'required',
            'phone' => 'required|unique:users',
            'email' => 'required|unique:users',
            'extension' => 'required',
            'gender' => 'required',
        ]);

        if($validate->fails()){
            $notification = array(
                'message' => $validate->messages()->first(),
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);

        }
        $role_id = Role::where('name','member')->first()->id;
        $accessCode =  mt_rand(1000, 999999);
        $saveMember = Member::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => 'user-'.uniqid(),
            'email_address' => $request->email,
            'role_id' => $role_id,
            'phone_number' => $request->phone,
            'extension_id' => $request->extension,
            'image' => 'images/logo.png',
            'member_type' => 'event',
            'active' => '0',
        ]);

        $saveUser = User::create([
            'name' => $request->last_name.' '.$request->first_name,
            'username' => 'user-'.uniqid(),
            'email' => $request->email,
            'phone' => $request->phone,
            'member_id' => $saveMember->id,
            'extension_id' => $request->extension,
            'image' => 'images/logo.png',
            'password' => bcrypt($request->last_name),
            'access_code' => $accessCode,
            'role_id' => $role_id,
            'active' => '0',
        ]);

        $saveUser->assignRole('member');
        $notification = array(
            'message' => " Your Access Code is ".$accessCode." !!! Check Your Mail to Continue",
            'alert-type' => 'success',
            'alert_js_type' => 'sweetalert'
        );
        $event = Event::where('event_code', $event_code)->first();
        $event_id = $event->id;
        $event_attendee = $event->event_attendee;
        $getTotalCheckIn = CheckIn::where('event_id', $event_id)->where('status', 'approved')->count();
        if ($getTotalCheckIn < $event_attendee) {
            $this->checkIn($saveUser->id, $event_id);
        }
        $details = [];
        $details['firstname'] = $request->first_name;
        $details['access_code'] = $accessCode;
        $this->email = $request->email;
        $this->name = $request->first_name;
        Mail::send('emails.access_code', $details , function($message){
            $message->to($this->email, $this->name)
                    ->subject('GLT Event Access Code');
        });
        return redirect()->back()->with($notification);

    }

    public function checkAccessCode(Request $request, $event_code)
    {
        $input = $request->all();

        $validate  = Validator::make($input, [
            'access_code' => 'required',
        ]);

        if($validate->fails()){
            $notification = array(
                'message' => $validate->messages()->first(),
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);

        }
        $getAccessCode = User::where('access_code', $request->access_code)->first();
        if(!$getAccessCode){
            $notification = array(
                'message' => 'Access Code Not Found!',
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);
        };

        $event = Event::where('event_code', $event_code)->first();
        $event_id = $event->id;
        $event_attendee = $event->event_attendee;
        $getTotalCheckIn = CheckIn::where('event_id', $event_id)->where('status', 'approved')->count();
        if ($getTotalCheckIn < $event_attendee) {
            $getExistCheckIn = CheckIn::where('event_id', $event_id)->where('user_id', $getAccessCode->id)->first();
            if ($getExistCheckIn) {
                $notification = array(
                    'message' => " You Already Registered For This Event!!! ",
                    'alert-type' => 'error'
                );
                return redirect()->back()->with($notification);
            }
            $this->checkIn($getAccessCode->id, $event_id);
            $notification = array(
                'message' => " Registeration For This Event Is Successful! Check Your Mail to continue",
                'alert-type' => 'success'
            );
            return redirect()->back()->with($notification);
        }
        $notification = array(
            'message' => " Maximum Number of Attendees Reached! Join Us Later for Upcoming Events",
            'alert-type' => 'error'
        );
        return redirect()->back()->with($notification);



    }

    public function newRegisterEvent($slug)
    {
        $event = Event::where('event_code', $slug)->first();
        $extensions = Extension::all();
        return view('user_registeration',['event' => $event, 'extensions' => $extensions]);
    }

    public function registerEvent($slug)
    {
        $event = Event::where('event_code', $slug)->first();
        return view('event_registeration',['event' => $event]);
    }

    public function viewEvent($slug)
    {
        $event = Event::where('event_code', $slug)->first();
        return view('viewEvent',['event' => $event]);
    }

    public function loginView()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $input = $request->all();

        $validate  = Validator::make($input, [
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validate->fails()){
            $notification = array(
                'message' => $validate->messages()->first(),
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);

        }

        $fieldType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'email';
        if(auth()->attempt(array($fieldType => $input['email'], 'password' => $input['password'])))
        {
            if(Auth::user()->active == 1){
                $notification = array(
                    'message' => 'Login successfully!',
                    'alert-type' => 'success'
                );
                if(Auth::user()->roles[0]->name == 'super-admin'){
                    session(['extension_id' => 'glt']);
                    return redirect()->route('dashboard.home')->with($notification);
                }
                elseif (Auth::user()->roles[0]->name == 'follow-up' || Auth::user()->roles[0]->name == 'member' || Auth::user()->roles[0]->name == 'head-of-ministry' || Auth::user()->roles[0]->name == 'ahom') {
                    session(['extension_id' => Auth::user()->extension_id]);
                    return redirect()->route('member.profile')->with($notification);
                }
                elseif (Auth::user()->roles[0]->name == 'teaching-ministry') {
                    session(['extension_id' => Auth::user()->extension_id]);
                    return redirect()->route('foundation.dashboard')->with($notification);
                }
                session(['extension_id' => Auth::user()->extension_id]);
                return redirect()->route('dashboard')->with($notification);
            }
            else{
                return $this->logout(1);
            }

        }else{
            $notification = array(
                'message' => 'Invalid Email/Username Or Password!',
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);
        }
    }

    public function logout($id = 0)
    {
        Auth::logout();
        if ($id) {
            $notification = array(
                'message' => 'Only Active Users Can Login!',
                'alert-type' => 'warning'
            );
        }
        else{
            $notification = array(
                'message' => 'Logout Successfully!',
                'alert-type' => 'success'
            );
        }
        return redirect('/')->with($notification);
    }
}
