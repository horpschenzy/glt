<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareReport extends Model
{
    protected $guarded = [];

    
    public function ministry()
    {
        return $this->belongsTo('App\Models\Ministry');
    }
    
}
