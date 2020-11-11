<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use Validator;
class LoginController extends Controller
{

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
            $notification = array(
                'message' => 'Login successfully!',
                'alert-type' => 'success'
            );
            if(Auth::user()->roles[0]->name == 'super-admin'){
                session(['extension_id' => 'glt']);
                return redirect()->route('dashboard.home')->with($notification);
            }
            elseif (Auth::user()->roles[0]->name == 'follow-up') {
                session(['extension_id' => Auth::user()->extension_id]);
                return redirect()->route('members')->with($notification);
            }
             session(['extension_id' => Auth::user()->extension_id]);
            return redirect()->route('dashboard')->with($notification);
        }else{
            $notification = array(
                'message' => 'Invalid Email/Username Or Password!',
                'alert-type' => 'error'
            );
            return redirect()->back()->with($notification);
        }
    }

    public function logout()
    {
        Auth::logout();
        $notification = array(
            'message' => 'Logout Successfully!',
            'alert-type' => 'success'
        );
        return redirect('/')->with($notification);
    }
}
