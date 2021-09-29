<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = ['feedbackType','feedbackReport','member_id','user_id', 'date_added'];
    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y h:i a');
    }


}
