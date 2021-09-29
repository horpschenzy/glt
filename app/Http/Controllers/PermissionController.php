<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Validator;
class PermissionController extends Controller
{

    public function index()
    {
        //
        $permissions = Permission::all();
        return Inertia::render('PermissionComponent',['permissions'=>$permissions]);
    }


    public function store(Request $request)
    {
        $messages = [
            'name.required' => 'We need to know the Permission Name !',
        ];
        $validate  = Validator::make($request->all(), [
            'name' => 'required|unique:permissions,name',
//            'permissions' => 'required'

        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 422);
        }
        if ($request->id) {
            Permission::where('id',$request->id)
                ->update([
                    'name' => $request->name,
                ]);
            return response()->json([ 'success' => 'Permission Name Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['name']);
            $permission = new Permission($data);
            $permission->save();
            return response()->json([ 'success' => 'Permission Added Successfully'], 200);
        }

    }

    public function destroy($unit)
    {
        Permission::where('id',$unit)->delete();
        return response()->json([ 'success' => 'Permission Deleted Successfully'], 200);
    }
}
