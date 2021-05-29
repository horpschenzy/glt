<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $fillable = [
            'title','first_name','last_name','other_names',
            'phone_number', 'email_address','dob','marital_status',
            'address','country','state','city','zipcode','image',
            'progress', 'extension_id', 'career', 'school',
            'course_of_study', 'hostel_address', 'home_address', 'school_level',
            'education_category', 'foundation_school_end_date', 'foundation_school_start_date', 'professional_occupation',
            'employer', 'office_address', 'position', 'business_name', 'business_nature',
            'business_address', 'business_position', 'father_name', 'mother_name',
            'father_occupation', 'parent_email', 'parent_phone_number', 'parent_address',
            'parent_marital_status', 'ministry_id', 'unit_id',
            'requirement','role_id', 'status', 'active', 'member_type', 'banner'
        ];
    public function extension()
    {
        return $this->belongsTo('App\Models\Extension');
    }

    public function unit()
    {
        return $this->belongsTo('App\Models\Unit');
    }

    public function ministry()
    {
        return $this->belongsTo('App\Models\Ministry');
    }
    public function user()
    {
        return $this->hasOne('App\User');
    }
    public function assigned()
    {
        return $this->hasOne('App\Models\Follow');
    }

    public function users()
    {
        return $this->belongsTo('App\User');
    }
    public function role()
    {
        return $this->belongsTo('Spatie\Permission\Models\Role');
    }
    public function getDobAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y');
    }    

}
