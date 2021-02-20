<?php

namespace App;

use Auth;
use App\Models\Member;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use LaravelAndVueJS\Traits\LaravelPermissionToVueJS;
class User extends Authenticatable
{
    use Notifiable;
    use HasRoles;
    use LaravelPermissionToVueJS;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','username','phone','extension_id','member_id','status','role_id','choices','image', 'access_code', 'active'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function extension()
    {
        return $this->belongsTo('App\Models\Extension');
    }

    public  function members(){
        return $this->belongsToMany(Member::class);
    }


}
