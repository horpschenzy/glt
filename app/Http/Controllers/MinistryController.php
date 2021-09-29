<?php

namespace App\Http\Controllers;

use App\Models\Ministry;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Validator;

class MinistryController extends Controller
{

    public function index()
    {
        $ministries = Ministry::all();
        return Inertia::render('MinistryComponent', ['ministries'=>$ministries]);
    }


    public function store(Request $request)
    {
        //
        $messages = [
            'min_name.required' => 'We need to know the Ministry Name !',
        ];
        $validate  = Validator::make($request->all(), [
            'min_name' => 'required|max:255|unique:ministries',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        if ($request->id) {
            Ministry::where('id',$request->id)
                ->update([
                    'min_name' => $request->min_name,

                ]);
            return response()->json([ 'success' => 'Ministry Name Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['min_name']);
            $ministry = new Ministry($data);
            $ministry->save();
            return response()->json([ 'success' => 'Ministry Added Successfully'], 200);
        }

    }


    public function destroy($ministry)
    {
        Ministry::where('id',$ministry)->delete();
        return response()->json([ 'success' => 'Ministry Deleted Successfully'], 200);
    }
}
