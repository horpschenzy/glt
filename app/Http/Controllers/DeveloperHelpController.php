<?php

namespace App\Http\Controllers;

use App\Models\DeveloperHelp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class DeveloperHelpController extends Controller
{

    public function index()
    {
        if (session('extension_id') == 'glt' || Auth::user()->roles[0]->name == 'super-admin') {
            $helps = DeveloperHelp::all();
        }else{
            $helps = DeveloperHelp::where('user_id', Auth::id())->get();
        }
        return  Inertia::render('DeveloperHelpComponent',['helps'=>$helps]);
    }

    public function store(Request $request)
    {
        //
        $messages = [
            'title.required' => 'We need to know the Title of your question Name !',
            'question.required' => 'We need to know your question  !',

        ];
        $validate  = Validator::make($request->all(), [
            'title' => 'required|max:15',
            'question' => 'required'
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }

        $data = $request->only(['title','question','user_id']);
        $data['user_id']= Auth::id();
        $help = new DeveloperHelp($data);
        $help->save();
        return response()->json([ 'success' => 'Question Submitted Successfully'], 200);


    }


    public function destroy($id)
    {

    }

}
