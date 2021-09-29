<?php

namespace App\Http\Controllers;
use App\Models\Unit;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Validator;
class UnitController extends Controller
{

    public function index()
    {

        $units = Unit::all();
        return Inertia::render('UnitComponent',['units'=>$units]);
    }


    public function store(Request $request)
    {
        $messages = [
            'unit_name.required' => 'We need to know the Unit Name !',
        ];
        $validate  = Validator::make($request->all(), [
            'unit_name' => 'required|max:255|unique:units',
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        if ($request->id) {
            Unit::where('id',$request->id)
                ->update([
                    'unit_name' => $request->unit_name,

                ]);
            return response()->json([ 'success' => 'Unit Name Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['unit_name']);
            $unit = new Unit($data);
            $unit->save();
            return response()->json([ 'success' => 'Unit Added Successfully'], 200);
        }

    }

    public function destroy($unit)
    {
        Unit::where('id',$unit)->delete();
        return response()->json([ 'success' => 'Unit Deleted Successfully'], 200);
    }
}
