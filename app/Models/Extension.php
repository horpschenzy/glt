<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;
use App\User;
class Extension extends Model
{
    protected $fillable = ['ext_name','ext_location','ext_phone','ext_email','ext_owner','ext_image'];
    public function getExtensionName($id)
    {
        $name['name'] = Extension::where('id', $id)->first()->ext_name;
        return (object) $name;
    }

    public static function changeLayout($layout)
    {
        User::where('id',Auth::id())->update(['choices'=>$layout]);
    }
}
