<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use DB;
class RolesController extends Controller
{

    public function index()
    {
        $roles = Role::with('permissions')->get();
        $permissions = Permission::all();
        return Inertia::render('RolesComponent',['roles'=>$roles, 'permissions'=>$permissions]);
    }


    public function getRolePermissions(Request $request){
        $id = $request->id;
        $permissions = DB::table('role_has_permissions')->select('permission_id')->where('role_id', $id)->get();
        return response()->json($permissions, 200);
    }

    public function addRole(Request $request)
    {
        $getRole = Role::create(['name' => $request->name]);
        if(count($request->permission) > 0){
            $getRole->syncPermissions($request->permission);
        }
        return response()->json([ 'success' => 'Role Created Successfully'], 200);
    }
    
    public function assignPermission(Request $request)
    {
        if(count($request->permission) < 1){
            return response()->json(['message' => 'Select a Permission for this Role'], 400);  
        }
        $getRole = Role::find($request->id);
        $getRole->syncPermissions($request->permission);
        return response()->json([ 'success' => 'Permission Assigned Successfully'], 200);
    }



    public function destroy($id)
    {
        Role::where('id',$id)->delete();
        return response()->json([ 'success' => 'Role Deleted Successfully'], 200);
    }
}
