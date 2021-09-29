<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    protected $fillable = ['user_id','extension_id'];
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y h:i a');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function students()
    {
        return $this->belongsToMany('App\Models\Student', 'student_teacher', 'student_id', 'teacher_id');
    }
}
