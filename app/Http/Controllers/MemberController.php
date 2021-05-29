<?php

namespace App\Http\Controllers;
use URL;
use App\User;
use Validator;
use Carbon\Carbon;
use App\Models\Unit;
use Inertia\Inertia;
use App\Models\Follow;
use App\Models\Member;
use App\Models\Feedback;
use App\Models\Ministry;
use App\Models\Extension;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Http\Traits\NewNotificationTrait;
use PragmaRX\Countries\Package\Countries;
use Intervention\Image\ImageManagerStatic as Image;

class MemberController extends Controller
{

    use NewNotificationTrait;

    public function updateBanner(Request $request)
    {
        if($request->banner){
            if (!str_contains($request->banner, '/images/profile/')){
                $folderPath = "images/profile/";

                $image_parts = explode(";base64,", $request->banner);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $banner = $file = $folderPath . uniqid() . '.'.$image_type;

                file_put_contents($file, $image_base64);
           }

        }
        $member = Member::where('id', Auth::user()->member_id)
                        ->update([
                            'banner' => $banner,
                        ]);
        $this->saveNotification(Auth::user()->member_id, 'useractivities', 'You changed your Profile Banner','');
        return response()->json(['success' => 'Banner Updated Successfully'], 200);
    }

    public function registerdNonMembers()
    {
        $stats  = [];
        $stats['page']  = 'non';
        if (session('extension_id') == 'glt') {
            $users =  User::role('follow-up')->get();
            $members = Member::with('extension')->with('unit')
            ->with('ministry')->with('user')
            ->with('role')->where('active', '0')->get();
            
        }else{
            if (Auth::user()->roles[0]->name == 'follow-up') {
                $users =  User::role('follow-up')->where('extension_id',session('extension_id'))->get();
                $userMembers = User::with(['members' => function ($query) {
                                        $query->with('extension')->with('unit')->with('assigned')
                                        ->with('ministry')->with('user')
                                            ->with('role')->where('extension_id',session('extension_id'));
                                    }])
                                    ->where('id',Auth::id())->first();
                $members = $userMembers->members;
                
                $stats['members'] = Member::where('extension_id',session('extension_id'))->where('active', 1)->pluck('id')->toArray();
                $stats['new'] = Member::where('extension_id',session('extension_id'))->where('active','0')->where('status', 'Guest')->whereDate('created_at', Carbon::today())->count();
                $stats['texts'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Text')->count();
                $stats['visits'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Visited')->count();
                $stats['calls'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Called')->count();
                $stats['emails'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Sent Email')->count();
            }
            else{
                $users =  User::role('follow-up')->where('extension_id',session('extension_id'))->get();
                $members = Member::with('extension')->with('unit')->with('assigned')
                                ->with('ministry')->with('user')
                                ->with('role')->where('extension_id',session('extension_id'))->where('active', '0')->get();
            }
        }
        return Inertia::render('MemberComponent', ['members'=>$members, 'users'=>$users, 'stats'  => $stats]);

    }

    public function index()
    {
        $stats  = [];
        $stats['page']  = '';
        if (session('extension_id') == 'glt') {
            $users =  User::role('follow-up')->get();
            $members = Member::with('extension')->with('unit')
            ->with('ministry')->with('user')
            ->with('role')->where('active', 1)->get();
            
        }else{
            if (Auth::user()->roles[0]->name == 'follow-up') {
                $users =  User::role('follow-up')->where('extension_id',session('extension_id'))->get();
                $userMembers = User::with(['members' => function ($query) {
                                        $query->with('extension')->with('unit')->with('assigned')
                                        ->with('ministry')->with('user')
                                            ->with('role')->where('extension_id',session('extension_id'));
                                    }])
                                    ->where('id',Auth::id())->first();
                $members = $userMembers->members;
                
                $stats['members'] = Member::where('extension_id',session('extension_id'))->where('active', 1)->pluck('id')->toArray();
                $stats['new'] = Member::where('extension_id',session('extension_id'))->where('active', 1)->where('status', 'Guest')->whereDate('created_at', Carbon::today())->count();
                $stats['texts'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Text')->count();
                $stats['visits'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Visited')->count();
                $stats['calls'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Called')->count();
                $stats['emails'] = Feedback::whereIn('member_id',$stats['members'])->where('feedbackType','Sent Email')->count();
            }
            else{
                $users =  User::role('follow-up')->where('extension_id',session('extension_id'))->get();
                $members = Member::with('extension')->with('unit')->with('assigned')
                                ->with('ministry')->with('user')
                                ->with('role')->where('extension_id',session('extension_id'))->where('active', 1)->get();
            }
        }
        return Inertia::render('MemberComponent', ['members'=>$members, 'users'=>$users, 'stats'  => $stats]);

    }


    public function create()
    {
        return Inertia::render('AddMemberComponent');

    }

    public function createGuest()
    {
        return Inertia::render('AddGuestMemberComponent');

    }

    public function followUp(Request  $request)
    {
        $messages = [
            'user_id.required' =>  'User id  is required!',
            'id.required' =>  ' Member Id is required!',
        ];
        $validate  = Validator::make($request->all(), [
            'id' => 'required',
            'user_id' => 'required',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 422);
        }
        $user = DB::table('member_user')->where('user_id',$request->user_id)->where('member_id',$request->id)->first();
        If($user){
            return response()->json(['message' => 'Member Has Been Assigned to User'],400);
        }
        $follow_up = new Follow();
        $follow_up->user_id = $request->user_id;
        $follow_up->member_id = $request->id;
        $follow_up->save();
        return response()->json(['success' => 'Member Updated Successfully'],200);
    }

    public function show($id)
    {
        $units = Unit::all();
        $ministries = Ministry::all();
        $member = Member::find($id);
        $extensions = Extension::all();
        $roles = Role::all();
        return Inertia::render('UpdateMemberComponent',['units' => $units, 'ministries' => $ministries,'member' => $member, 'extensions' => $extensions, 'roles' => $roles]);
    }

    public function getStates($country)
    {
        $countries = new Countries();
        $all = $countries->where('name.common', $country)->first()
        ->hydrateStates()
        ->states
        ->sortBy('name')
        ->pluck('name');
        return response()->json([ 'states' =>  $all], 200);

    }


    public function updateUnit(Request $request)
    {
        $progress = $request->progress;
        if ($request->unit_id && $request->ministry_id  && $request->requirement && $request->status) {
            if ($progress == 3) {
                $progress = 4;
            }
        }

        $requirement = '';
        if ($request->requirement) {
            if (isset($request->requirement[0]) && isset($request->requirement[1])) {
                $requirement = $request->requirement[0].','.$request->requirement[1];
            }elseif(isset($request->requirement[0]) && !isset($request->requirement[1])){
                $requirement = $request->requirement[0];
            }
            elseif(!isset($request->requirement[0]) && isset($request->requirement[1])){
                $requirement = $request->requirement[1];
            }
            # code...
        }
        $member = Member::where('id', $request->id)
                    ->update([
                        'unit_id' => $request->unit_id,
                        'ministry_id' => $request->ministry_id,
                        'extension_id' => ($request->extension_id) ?  ($request->extension_id) : Auth::user()->extension_id,
                        'requirement' => $requirement,
                        'status' => $request->status,
                        'role_id' => $request->role_id,
                        'progress' => $progress,
                        'image' => empty($request->image) ? 'images/logo.png' : $request->image,
                    ]);
        if ($request->role_id) {
            $checkExist = User::where('email',$request->email_address)->first();
            if ($checkExist) {
                $role_id = $checkExist->role_id;
                if ($role_id == $request->role_id) {
                    $this->saveNotification($checkExist->id, 'useractivities', 'You changed your Unit/Ministry information','');
                }
                else{
                    $getOldRoleDetails = Role::where('id', $role_id)->first()->name;
                    $getNewRoleDetails = Role::where('id', $request->role_id)->first()->name;
                    $this->saveNotification($checkExist->id, 'useractivities', 'You have been moved from '.$getOldRoleDetails.' to '.$getNewRoleDetails,'');
                }
                $checkExist->syncRoles($request->role_id);
            }
            else{
                $user = User::create([
                    'name' => $request->last_name.' '.$request->first_name,
                    'username' => 'user-'.uniqid(),
                    'email' => $request->email_address,
                    'phone' => $request->phone_number,
                    'member_id' => $request->id,
                    'extension_id' => $request->extension_id,
                    'image' => empty($request->image) ? 'images/logo.png' : $request->image,
                    'password' => bcrypt($request->last_name)
                ]);
                $user->assignRole($request->role_id);
                $this->saveNotification($user->id, 'useractivities', 'You changed your Unit/Ministry information','');
            }
        }
        return response()->json(['success' => 'Member Updated Successfully'], 200);
    }

    public function updateParent(Request $request)
    {
        $progress = $request->progress;
        if ($request->father_name && $request->mother_name &&
            $request->father_occupation && $request->parent_email && $request->parent_phone_number &&
            $request->parent_address && $request->parent_marital_status) {
                if ($progress == 2) {
                    $progress = 3;
                }
            }
        $member = Member::where('id', $request->id)
                    ->update([
                        'father_name' => $request->father_name,
                        'mother_name' => $request->mother_name,
                        'father_occupation' => $request->father_occupation,
                        'parent_email' => $request->parent_email,
                        'parent_phone_number' => $request->parent_phone_number,
                        'parent_address' => $request->parent_address,
                        'parent_marital_status' => $request->parent_marital_status,
                        'progress' => $progress,
                    ]);
        $user = User::where('member_id', $request->id)->first();
        $this->saveNotification($user->id, 'useractivities', 'You changed your Parent information','');
        return response()->json([ 'success' => 'Member Updated Successfully'], 200);
    }

    public function updateCareer(Request $request)
    {
        $progress = $request->progress;
        if ($request->career == 'student') {
            if ($request->school && $request->course_of_study && $request->hostel_address &&
                $request->home_address && $request->school_level && $request->education_category &&
                $request->foundation_school_start_date && $request->foundation_school_end_date) {
                    if ($progress == 1) {
                        $progress = 2;
                    }
            }
            $member = Member::where('id', $request->id)
                            ->update([
                                'school' => $request->school,
                                'course_of_study' => $request->course_of_study,
                                'hostel_address' => $request->hostel_address,
                                'home_address' => $request->home_address,
                                'school_level' => $request->school_level,
                                'education_category' => $request->education_category,
                                'foundation_school_start_date' => $request->foundation_school_start_date,
                                'foundation_school_end_date' => $request->foundation_school_end_date,
                                'career' => $request->career,
                                'progress' => $progress,
                            ]);
        }
        elseif ($request->career == 'professional') {
            if ($request->professional_occupation && $request->employer && $request->office_address &&
                $request->position) {
                    if ($progress == 1) {
                        $progress = 2;
                    }
            }
            $member = Member::where('id', $request->id)
                            ->update([
                                'professional_occupation' => $request->professional_occupation,
                                'employer' => $request->employer,
                                'office_address' => $request->office_address,
                                'position' => $request->position,
                                'career' => $request->career,
                                'progress' => $progress,
                            ]);
        }
        elseif ($request->career == 'enterprenuer') {
            if ($request->business_name && $request->business_nature && $request->business_address &&
                $request->business_position) {
                    if ($progress == 1) {
                        $progress = 2;
                    }
            }
            $member = Member::where('id', $request->id)
                            ->update([
                                'business_name' => $request->business_name,
                                'business_nature' => $request->business_nature,
                                'business_address' => $request->business_address,
                                'business_position' => $request->business_position,
                                'career' => $request->career,
                                'progress' => $progress,
                            ]);
        }
        $user = User::where('member_id', $request->id)->first();
        $this->saveNotification($user->id, 'useractivities', 'You changed your Career information','');
        return response()->json([ 'success' => 'Member Updated Successfully'], 200);
    }

    public function updatePersonal(Request $request)
    {
        $messages = [
            'first_name.required' =>  'First Name is required!',
            'last_name.required' =>  'Last Name is required!',
            'email_address.required' => 'We need to know your e-mail address!',
            'phone_number.required' =>  'Member Phone Number is required!',
            'dob.required' =>  'Member Date of Birth is required!',
            'marital_status.required' =>  'Member Country is required!',
            'country.required' =>  'Member Country is required!',
            'state.required' =>  'Member Country is required!',
        ];
        $validate  = Validator::make($request->all(), [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email_address' => 'required|max:255',
            'phone_number' => 'required|max:255',
            'dob' => 'required|max:255',
            'marital_status' => 'required|max:255',
            'country' => 'required|max:255',
            'state' => 'required|max:255',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        $getMember = Member::where('id', $request->id)->first();
        $image = $getMember->image;
        // dd($image);
        if($request->image){
            if (!str_contains($request->image, '/images/profile/')){
                // $pdate = strtotime(date('y-m-d h:i:s')).'.png';
                // $image = '/images/profile/'.$pdate;
                // Image::make($request->image)->save(public_path('images/profile/').$pdate);
                $folderPath = "images/profile/";

                $image_parts = explode(";base64,", $request->image);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $image = $file = $folderPath . uniqid() . '.'.$image_type;

                file_put_contents($file, $image_base64);
           }

        }
        $member = Member::where('id', $request->id)
                        ->update([
                            'title' => $request->title,
                            'first_name' => $request->first_name,
                            'last_name' => $request->last_name,
                            'other_names' => $request->other_names,
                            'email_address' => $request->email_address,
                            'phone_number' => $request->phone_number,
                            'dob' => $request->dob,
                            'marital_status' => $request->marital_status,
                            'address' => $request->address,
                            'country' => $request->country,
                            'state' => $request->state,
                            'city' => $request->city,
                            'zipcode' => $request->zipcode,
                            'active' => (int) $request->active,
                            'image' => $image,
                        ]);
        $user = User::where('member_id', $request->id);
        $updateUser = $user->update([
                            'name' => $request->last_name.' '.$request->first_name,
                            'email' => $request->email_address,
                            'phone' => $request->phone_number,
                            'active' => (int) $request->active,
                            'image' => $image,
        ]);
        if ($getMember->active == '0' && $request->active == '1' ) {
            $accessCode =  $user->first()->access_code;
            $details = [];
            $details['firstname'] = $request->first_name;
            $details['access_code'] = $accessCode;
            $this->email = $request->email_address;
            $this->name = $request->first_name;
            Mail::send('emails.registeration', $details , function($message){
                $message->to($this->email, $this->name)
                        ->subject('GLT Welcome Mail');
            });
        }
        $this->saveNotification($user->first()->id, 'useractivities', 'You changed your personal information','');
        return response()->json([ 'success' => 'Member Updated Successfully'], 200);
    }

    public function storePersonal(Request $request)
    {
        $messages = [
            'first_name.required' =>  'First Name is required!',
            'last_name.required' =>  'Last Name is required!',
            'email_address.required' => 'We need to know your e-mail address!',
            'phone_number.required' =>  'Member Phone Number is required!',
            'dob.required' =>  'Member Date of Birth is required!',
            'marital_status.required' =>  'Member Country is required!',
            'country.required' =>  'Member Country is required!',
            'state.required' =>  'Member Country is required!',
        ];
        $validate  = Validator::make($request->all(), [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email_address' => 'required|max:255|unique:members',
            'phone_number' => 'required|max:255|unique:members',
            'dob' => 'required|max:255',
            'marital_status' => 'required|max:255',
            'country' => 'required|max:255',
            'state' => 'required|max:255',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }

        $data = $request->only(['title','first_name','last_name','other_names','email_address','phone_number','dob','marital_status','address','country','state','city','zipcode']);
        $data['progress'] = 1;
        if (Auth::user()->extension_id == null) {
            if(session('extension_id') == 'glt') {
                return response()->json([ 'message' => 'User must belong to an extension'], 400);
            }
            else{
                $data['extension_id'] = session('extension_id');
            }
        }
        else{

            $data['extension_id'] = Auth::user()->extension_id;
        }

        $date['image'] = ($request->image) ?  $request->image : 'images/portrait/small/avatar-s-10.png';

        if($request->image){
            if (!str_contains($request->image, '/images/profile/')){
                // $pdate = strtotime(date('y-m-d h:i:s')).'.png';
                // $data['image'] = '/images/profile/'.$pdate;
                // Image::make($request->image)->save(public_path('images/profile/').$pdate);
                $folderPath = "images/profile/";

                $image_parts = explode(";base64,", $request->image);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $data['image'] = $file = $folderPath . uniqid() . '.'.$image_type;

                file_put_contents($file, $image_base64);
           }

        }
        $member = new Member($data);
        $member->save();

        $role_id = Role::where('name','member')->first()->id;
        $accessCode =  mt_rand(1000, 999999);
        $user = User::create([
            'name' => $request->last_name.' '.$request->first_name,
            'username' => 'user-'.uniqid(),
            'email' => $request->email_address,
            'phone' => $request->phone_number,
            'member_id' => $member->id,
            'extension_id' => $data['extension_id'],
            'image' => (isset($data['image'])) ? $data['image'] : 'images/logo.png',
            'access_code' => $accessCode,
            'role_id' => $role_id,
            'password' => bcrypt($request->last_name)
        ]);
        $user->assignRole('member');
        return response()->json([ 'success' => 'Member Added Successfully','member' => $member->id], 200);
    }



    public function addGuest(Request $request){

        $messages = [
            'first_name.required' =>  'First Name is required!',
            'last_name.required' =>  'Last Name is required!',
            'email_address.required' => 'We need to know your e-mail address!',
            'phone_number.required' =>  'Member Phone Number is required!',
            'dob.required' =>  'Member Date of Birth is required!',
            'marital_status.required' =>  'Member Country is required!',
            'birthday.required' => 'Guest Birthday is Required',
            'age_range.required' => 'Guest Age Range is Required',
            'gender.required' => 'Gender is requiresd',
            'service_status.required'=>'How was service is required',
            'find_church.required'=>'How did you find the church is required',
            'visit_guest.required'=>'Visit Guest is required',
            'join_church.required'=>'Join church is required',
            'address.required'=>'Address is required'
        ];

        $validate  = \Validator::make($request->all(),[
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'email_address' => 'required|max:255|unique:members',
                'phone_number' => 'required|max:255|unique:members',
                'birthday' => 'required|max:255',
                'marital_status' => 'required|max:255',
                'age_range' => 'required|max:255',
                'gender' => 'required|max:255',
                'occupation'=>'nullable|string',
                'school' =>'nullable|string',
                'employer'=>'nullable|string',
                'baptized'=>'nullable',
                'date_of_baptism'=>'nullable',
                'service_status'=>'required',
                'find_church'=>'required',
                'visit_guest'=>'required',
                'join_church'=>'required',
                'address'=>'required'
            ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }


        $data = $request->only(['first_name','last_name','email_address','phone_number','birthday','marital_status','age_range','gender','occupation','school','employer',
            'baptized','date_of_baptism','service_status','find_church','visit_guest','join_church','address']);
        $data['progress'] = 1;
        if (Auth::user()->extension_id == null) {
            if(session('extension_id') == 'glt') {
                return response()->json([ 'message' => 'Follow Up User must belong to an extension'], 400);
            }
            else{
                $data['extension_id'] = session('extension_id');
            }
        }
        else{

            $data['extension_id'] = Auth::user()->extension_id;
        }

        $member = new Member($data);

        $member->save();
        return response()->json([ 'success' => 'Member Added Successfully','member' => $member->id], 200);

    }


    public function updateGuest(Request $request){

        $messages = [
            'first_name.required' =>  'First Name is required!',
            'last_name.required' =>  'Last Name is required!',
            'email_address.required' => 'We need to know your e-mail address!',
            'phone_number.required' =>  'Member Phone Number is required!',
            'dob.required' =>  'Member Date of Birth is required!',
            'marital_status.required' =>  'Member Country is required!',
            'birthday.required' => 'Guest Birthday is Required',
            'age_range.required' => 'Guest Age Range is Required',
            'gender.required' => 'Gender is requiresd',
            'service_status.required'=>'How was service is required',
            'find_church.required'=>'How did you find the church is required',
            'visit_guest.required'=>'Visit Guest is required',
            'join_church.required'=>'Join church is required',
            'address.required'=>'Address is required'
        ];

        $validate  = \Validator::make($request->all(),[
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email_address' => 'required|max:255|unique:members',
            'phone_number' => 'required|max:255|unique:members',
            'birthday' => 'required|max:255',
            'marital_status' => 'required|max:255',
            'age_range' => 'required|max:255',
            'gender' => 'required|max:255',
            'occupation'=>'nullable|string',
            'school' =>'nullable|string',
            'employer'=>'nullable|string',
            'baptized'=>'nullable',
            'date_of_baptism'=>'nullable',
            'service_status'=>'required',
            'find_church'=>'required',
            'visit_guest'=>'required',
            'join_church'=>'required',
            'address'=>'required'
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        Member::where('id', $request->id)
            ->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'other_names' => $request->other_names,
                'email_address' => $request->email_address,
                'phone_number' => $request->phone_number,
                'birthday' => $request->birthday,
                'marital_status' => $request->marital_status,
                'address' => $request->address,
                'age_range' => $request->age_range,
                'gender' => $request->gender,
                'occupation' => $request->occupation,
                'school' => $request->school,
                'employer' => $request->employer,
                'baptized' => $request->baptized,
                'date_of_baptism' => $request->date_of_baptism,
                'service_status' => $request->service_status,
                'find_church' => $request->find_church,
                'visit_guest'=>$request->visit_church,
                'join_church'=>$request->join_church,

            ]);
        return response()->json([ 'success' => 'Member Updated Successfully'], 200);

    }


    public function destroy($id)
    {
        Member::where('id',$id)->delete();
        return response()->json([ 'success' => 'Member Deleted Successfully'], 200);
    }
}
