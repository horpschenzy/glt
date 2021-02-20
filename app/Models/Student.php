<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = ['user_id','student_id','status','extension_id'];
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y h:i a');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function teachers()
    {
        return $this->belongsToMany('App\Models\Teacher', 'student_teacher', 'student_id', 'teacher_id');
    }
    
}
