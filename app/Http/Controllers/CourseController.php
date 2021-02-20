<?php

namespace App\Http\Controllers;

use Validator;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Extension;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function addCourse()
    {
        Extension::changeLayout('foundation');
        return Inertia::render('AddCourseComponent');
    }
    public function index()
    {
        Extension::changeLayout('foundation');
        $courses = Course::all();
        return Inertia::render('CourseComponent', ['courses' => $courses]);
    }

    public function store(Request $request)
    {

        $validate  = Validator::make($request->all(), [
            // 'ext_name' => 'required|max:255|unique:extensions',
            'course_title' => 'required',
            'course_code' => 'required',
            'course_description' => 'required',
        ]);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }

        if ($request->id) {
            $image_parts = explode(";base64,", $request->course_img);
            if(isset($image_parts[1])) {
                if (!str_contains($request->course_img, '/images/course/')) {
                    $folderPath = "images/course/";
                    $image_parts = explode(";base64,", $request->course_img);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $image = $file = $folderPath . uniqid() . '.' . $image_type;
                    file_put_contents($file, $image_base64);
                }
            }else{
                $image = Course::where('id',$request->id)->first()->course_img;
            }
            Course::where('id',$request->id)
                    ->update([
                            'course_code' => $request->course_code,
                            'course_title' => $request->course_title,
                            'course_description' => $request->course_description,
                            'course_img' => $image,
                        ]);
            return response()->json([ 'success' => 'Course Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['course_code','course_title','course_description']);
            if($request->course_img){
                if (!str_contains($request->course_img, '/images/course/')){
                    $folderPath = "images/course/";
                    $image_parts = explode(";base64,", $request->course_img);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $data['course_img'] = $file = $folderPath . uniqid() . '.'.$image_type;
                    file_put_contents($file, $image_base64);
                }

            }
            $course = new Course($data);
            $course->save();
            return response()->json([ 'success' => 'Course Added Successfully'], 200);
        }
    }

    public function destroy($course)
    {
        Course::where('id',$course)->delete();
        return response()->json([ 'success' => 'Course Deleted Successfully'], 200);
    }
}
