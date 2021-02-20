<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [ 'event_name','event_code','event_type', 'status',
                            'event_url','event_start_date','event_start_time',
                            'event_end_date','event_end_time','venue_type', 
                            'location', 'event_image', 'event_status', 'event_attendee',
                            'extension_id'
                        ];        
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('d-F-Y');
    }          
    public function getEventStartDateAttribute($date)
    {
        return date('l, jS F Y',strtotime($date));
    }          
    public function getEventEndDateAttribute($date)
    {
        return date('l, jS F Y',strtotime($date));
    } 
    public function extension()
    {
        return $this->belongsTo('App\Models\Extension');
    }         
    public function checkins()
    {
        return $this->hasMany('App\Models\CheckIn');
    }         
}