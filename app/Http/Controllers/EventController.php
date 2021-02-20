<?php

namespace App\Http\Controllers;

use App\User;
use Validator;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Member;
use App\Models\CheckIn;
use Illuminate\Support\Str;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function attendee($event_code)
    {
        $event = Event::where('event_code', $event_code)->first();
        $checkIns = DB::table('check_ins')
                        ->join('users', 'users.id', '=', 'check_ins.user_id')
                        ->where('event_id',  $event->id)
                        ->where('check_ins.status',  'approved')
                        ->select('check_ins.id', 'check_ins.status','check_ins.event_id', 'users.name', 'users.access_code', 'users.email')
                        ->get();
        return Inertia::render('AttendeeComponent', ['checkins' => $checkIns, 'event' => $event]);
    }
    public function searchCheckIns(Request $request, $id)
    {
        $checkIns = DB::table('check_ins')
                        ->join('users', 'users.id', '=', 'check_ins.user_id')
                        ->where('event_id',  $id)
                        ->where(function ($query) use ($request) {
                            $query->where('name', 'like', '%' . $request->search . '%')
                                  ->orWhere('email', 'like', '%' . $request->search . '%')
                                  ->orWhere('access_code', 'like', '%' . $request->search . '%');
                        })
                        ->select('check_ins.id', 'check_ins.status','check_ins.event_id', 'users.name', 'users.access_code', 'users.email')
                        ->get();
        return response()->json([ 'success' => $checkIns], 200);
    }
    public function moveUserIn(Request $request)
    {
        $updateCheckIn = CheckIn::where('id', $request->check_in_id);
        $updateCheckIn->update(['status'=>'approved']);
        $getEventDetails = Event::where('id', $updateCheckIn->event_id)->first();
        $this->saveNotification($updateCheckIn->first()->id, 'event', 'You have been checked in for this event('.$getEventDetails->event_name.')',$getEventDetails->event_url);
        return response()->json([ 'success' => 'User Checked In Successfully'], 200);
    }

    public function index()
    {

        $events = Event::with('extension')
                        ->with(['checkins' => function($q) {
                            $q->where('status', '=', 'approved');
                        }])
                        ->get();
        $leaders = User::with('roles')->whereHas('roles', function($query){ 
                        $query->where('name', 'ahom')->orWhere('name', 'admin')
                            ->orWhere('name', 'head-of-follow-up-ministry')
                            ->orWhere('name', 'head-of-ministry')
                            ->orWhere('name', 'follow-up')
                            ->orWhere('name', 'teaching-ministry'); 
                    })
                    ->where('extension_id',session('extension_id'))->where('active', 1)->get();
        if (Auth::user()->roles[0]->name == 'super-admin' || Auth::user()->roles[0]->name == 'admin' ) {
            return Inertia::render('EventComponent',['events' => $events]);
        }else{
                $member = Member::where('id',Auth::user()->member_id)->first();
                $users = User::where('id',Auth::id())->first();
                $notifications = Notification::where('user_id',Auth::id())->get();
                $page = 'event';
                return Inertia::render('MemberProfileComponent',['events' => $events, 'users'=>$users,'member'=>$member, 'notifications' => $notifications, 'page' => $page, 'leaders' => $leaders]);
        }

    }

    public function show($id)
    {
        $event = Event::where('event_code', $id)->first();
        return Inertia::render('AddEventComponent', ['event' => $event]);
    }
    public function create()
    {
        return Inertia::render('AddEventComponent');
    }

    public function checkIn($event_code)
    {
        $event = Event::where('event_code', $event_code)->first();
        $checkIns = DB::table('check_ins')
                        ->join('users', 'users.id', '=', 'check_ins.user_id')
                        ->where('event_id',  $event->id)
                        ->select('check_ins.id', 'check_ins.status','check_ins.event_id', 'users.name', 'users.access_code', 'users.email')
                        ->get();
        return Inertia::render('CheckInComponent', ['checkins' => $checkIns, 'event' => $event]);
    }

    public function store(Request $request)
    {
        $validate  = Validator::make($request->all(), [
            'event_name' => 'required',
            'event_type' => 'required',
            'event_attendee' => 'required',
            'status' => 'required',
            'event_start_date' => 'required',
            'event_start_time' => 'required',
            'event_end_date' => 'required',
            'event_end_time' => 'required',
            'venue_type' => 'required',
            'event_image' => 'required',
        ]);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        if ($request->id) {
            $event = Event::where('id', $request->id);
            $image_parts = explode(";base64,", $request->event_image);
            if(isset($image_parts[1])) {
                if (!str_contains($request->event_image, '/images/event_image/')) {
                    $folderPath = "images/event_image/";
                    $image_parts = explode(";base64,", $request->event_image);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $image = $file = $folderPath . uniqid() . '.' . $image_type;
                    file_put_contents($file, $image_base64);
                }
            }else{
                $image = $event->first()->event_image;
            }
            $updateEvent = $event->update([
                            'event_name' => $request->event_name,
                            'event_code' => ($request->event_name == $event->first()->event_name)? $event->first()->event_code : $slug = $this->createSlug($request->event_name),
                            'event_url' => ($request->event_name == $event->first()->event_name)? $event->first()->event_url : URL::to('/').'/e/'.$slug,
                            'event_type' => $request->event_type,
                            'event_attendee' => $request->event_attendee,
                            'status' => $request->status,
                            'location' => $request->location,
                            'event_start_date' => date('Y-m-d',strtotime($request->event_start_date)),
                            'event_start_time' => date('h:i:a',strtotime($request->event_start_time)),
                            'event_end_date' => date('Y-m-d',strtotime($request->event_end_date)),
                            'event_end_time' => date('h:i:a',strtotime($request->event_end_time)),
                            'venue_type' => $request->venue_type,
                            'event_image' => $image,
                        ]);
            return response()->json([ 'success' => 'Event Edited Successfully'], 200);
        }
        $data = $request->only(['event_name', 'event_type', 'venue_type', 'event_attendee', 'event_status']);
        $data['event_code'] = $this->createSlug($request->event_name);
        $data['event_url'] = URL::to('/').'/e/'.$data['event_code'];
        if ($request->location) {
            $data['location'] = $request->location;
        }
        $extension_id =  (session('extension_id') == 'glt') ? 0 :  session('extension_id');
        $data['extension_id'] = $extension_id;
        $startDate = $data['event_start_date'] = date('Y-m-d',strtotime($request->event_start_date));
        $endDate = $data['event_end_date'] = date('Y-m-d',strtotime($request->event_end_date));
        $data['event_start_time'] = date('h:i:a',strtotime($request->event_start_time));
        $data['event_end_time'] = date('h:i:a',strtotime($request->event_end_time));
        $status = 'NOT STARTED';
        $today = date('Y-m-d');
        if(($startDate < $today) AND ($endDate < $today) ){
            $status = 'FINISHED';
        }
        if(($startDate <= $today) AND ($endDate > $today) ){
            $status = 'ONGOING';
        }
        $data['status'] = $status;
        if($request->event_image){
            if (!str_contains($request->event_image, '/images/event/')){
                $folderPath = "images/event/";
                $image_parts = explode(";base64,", $request->event_image);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $data['event_image'] = $file = $folderPath . uniqid() . '.'.$image_type;
                file_put_contents($file, $image_base64);
            }
        }
        $event = new Event($data);
        $save = $event->save();
        return response()->json([ 'success' => 'Event Added Successfully'], 200);
    }

    public function createSlug($title)
    {
        // Normalize the title
        $slug = Str::slug($title);
        return $newSlug = $slug.'-'.uniqid();
    }

    protected function getRelatedSlugs($slug)
    {
        return Event::select('event_code')->where('event_code', 'like', $slug.'%')->get();
    }

    public function destroy($event)
    {
        Event::where('id',$event)->delete();
        return response()->json([ 'success' => 'Event Deleted Successfully'], 200);
    }
}
