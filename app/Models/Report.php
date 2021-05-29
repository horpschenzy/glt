<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $guarded = [];

    public function incomes()
    {
        return $this->hasMany(Income::class);
    }
    
    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

    public function getCreatedAtAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y');
    }

    public function getServiceDateAttribute($date)
    {
        return \Carbon\Carbon::create($date)->format('F d, Y');
    }
}
