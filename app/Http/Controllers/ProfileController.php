<?php


namespace App\Http\Controllers;


use App\User;
use Validator;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{

    public  function index(){
        $member = Member::where('id',Auth::user()->member_id)->first();
        $users = User::where('id',Auth::id())->first();
        return Inertia::render('ProfileComponent',['users'=>$users,'member'=>$member]);
    }


    public function memberProfile(){
        $member = Member::where('id',Auth::user()->member_id)->first();
        $users = User::where('id',Auth::id())->first();
        $notifications = Notification::where('user_id',Auth::id())->get();
        $page = 'timeline';
        $leaders = User::with('roles')->whereHas('roles', function($query){ $query->where('name', 'ahom'); })->where('extension_id',session('extension_id'))->where('active', 1)->get();
        return Inertia::render('MemberProfileComponent',['users'=>$users,'member'=>$member, 'notifications' => $notifications, 'page' => $page, 'leaders' => $leaders]);
    }


    public function store(Request $request){
        $messages = [
            'first_name.required' => 'We need to Your first Name !',
            'last_name.required' => 'We need to Your Last Name !',
            'dob.required' => 'We need to Your Date of Birth  !',
            'email_address.required' => 'We need to Your email address !',
            'phone_number.required' => 'We need to Your Phone Number !',

        ];
        $validate  = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email_address' => 'required',
            'dob'=>'required',
            'phone_number'=>'required'

        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 422);
        }
        $user = User::findOrfail(Auth::id());
        $image = $user->image;

        if($request->image){
            if (!str_contains($request->image, '/images/profile/')){
                $folderPath = "images/profile/";
                $image_parts = explode(";base64,", $request->image);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $image = $file = $folderPath . uniqid() . '.'.$image_type;
                file_put_contents($file, $image_base64);
            }

        }


        Member::where('id',Auth::user()->member_id)
                ->update([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'other_names'=> $request->other_names,
                    'dob'=>$request->dob,
                    'email_address'=>$request->email_address,
                    'phone_number'=>$request->phone_number,
                    'image'=> $image,
                    'address'=>$request->address,
                ]);

            User::where('id',Auth::id())->update([
                'name'=> $request->first_name .' '. $request->last_name . ' '. $request->other_names,
                'email'=>$request->email_address,
                'image'=>$image,
                'phone'=> $request->phone_number,
                'username'=> $request->username
            ]);
            return response()->json([ 'success' => 'Profile Update Successfully'], 200);

    }


    public function editImage(Request $request){
        if($request->image){
            if (!str_contains($request->image, '/images/profile/')){
                $folderPath = "images/profile/";
                $image_parts = explode(";base64,", $request->image);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $image = $file = $folderPath . uniqid() . '.'.$image_type;
                file_put_contents($file, $image_base64);
            }

        }


        Member::where('id',$request->id)->update([
            'image'=>$image
        ]);

        return response()->json([ 'success' => 'Profile Update Successfully'], 200);

    }


    public function changePassword(Request $request)
    {
        $messages = [
            'old_password.requires'=>'Please Enter Your Current Password',
            'password.required' => 'Please Enter New Password !',

        ];
        $validate  = Validator::make($request->all(), [
            'old_password' => 'required',
            'password' => 'required|confirmed|min:6',

        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 422);
        }
        if(!Hash::check($request->old_password, Auth::user()->password)){
            return response()->json(['message'=>'old password does not match'],400);
        }

        $user = User::find(Auth::user()->id);
        $user->password = Hash::make($request->passowrd);
        $user->save();

        return response()->json(['message'=>'Password Changed Successfully'],200);
    }
}
