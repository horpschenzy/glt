<?php

namespace App\Http\Controllers;

use App\Models\Extension;
use App\Models\Member;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Validator;
class UsersController extends Controller
{

    public function index()
    {
        $extensions = Extension::all();
        $roles = Role::all();
        if (session('extension_id') == 'glt' || Auth::user()->roles[0]->name == 'super-admin') {
            $users = User::with('extension')->with('roles')->get();
        }else{
            $users = User::with('extension')->with('roles')->where('extension_id',session('extension_id'))->get();
        }
       return Inertia::render('AddUserComponent',['extensions'=>$extensions,'users'=>$users,'roles'=>$roles]);
    }





    public function store(Request $request)
    {
        //

        $messages = [
            'ext_email.required' => 'We need to know your e-mail address!',
            'name.required' =>  ' Name is required!',
            'phone.required' =>  'Phone Number is required!',
            'username.required' =>  'Username',
        ];
        $validate  = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required',
            'username' => 'required',
            'phone' => 'required',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }

        if ($request->id) {
            $user  =  User::where('id',$request->id)->first();
            $user->syncRoles($request->role_id);
                        $user->update([
                            'name' => $request->name,
                            'email' => $request->email,
                            'phone' => $request->phone,
                            'username' => $request->username,
                            'extension_id' => $request->extension_id,
                            'status' => $request->status,
                            'role_id' => $request->role_id
                        ]);

            if($user->member_id){
                Member::where('id', $user->member_id)->update([
                    'email_address' => $request->email,
                    'phone_number' => $request->phone,
                    'role_id' => $request->role_id,
                ]);
            }
            if($request->password){
                $user->password =  bcrypt($request->password);
                $user->update();
            }
            return response()->json([ 'success' => 'User Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['name','email','phone','username','password','extension_id','role_id','status']);
            $data['password'] = bcrypt($request->password);
            $user = new User($data);
            $user->assignRole($request->role_id);
            $user->save();
            return response()->json([ 'success' => 'User Added Successfully'], 200);
        }
    }




    public function destroy($id)
    {
        //
        User::where('id',$id)->delete();
        DB::table('model_has_roles')->where('model_id', $id)->delete();
        return response()->json([ 'success' => 'User Deleted Successfully'], 200);
    }
}
