<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Inertia\Inertia;
use Validator;
use Auth;
class FeedbackController extends Controller
{
    public function index($member_id)
    {
      $getMemberFeedbacks = Feedback::where('member_id',$member_id)->where('user_id',Auth::id())->get();
      return Inertia::render('FeedbackComponent', ['feedbacks'=>$getMemberFeedbacks, 'member_id'=>$member_id]);
    }
    public function store(Request $request)
    {
        $messages = [
            'feedbackType.required' => 'Kindly Select a Feedback Type!',
        ];
        $validate  = Validator::make($request->all(), [
            'feedbackType' => 'required'
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        if ($request->id) {
            Feedback::where('id',$request->id)
                ->update([
                    'feedbackType' => $request->feedbackType,
                    'feedbackReport' => $request->feedbackReport,
                    'member_id' => $request->member_id,
                    "date_added" => $request->date_added,

                ]);
            return response()->json([ 'success' => 'Feedback Edited Successfully'], 200);
        }else {
            $data = $request->only(['feedbackType', 'feedbackReport', 'member_id', 'date_added']);
            $data['user_id'] = Auth::id();
            $feedback = new Feedback($data);
            $feedback->save();
            return response()->json(['success' => 'Feedback Added Successfully'], 200);
        }
    }

}
