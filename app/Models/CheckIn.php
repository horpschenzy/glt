<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CheckIn extends Model
{
    protected $fillable = ['user_id','event_id', 'status'];

    public function users()
    {
        return $this->hasMany('App\User');
    }    
}
