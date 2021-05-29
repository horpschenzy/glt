<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Validator;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Member;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Extension;
use Illuminate\Http\Request;

class FoundationController extends Controller
{
    public function assignTeacher(Request $request)
    {
        $date = date('Y-m-d H:i:s');
        $getStudent = \DB::table('student_teacher')->where('student_id', $request->student_id)->first();
        if($getStudent){
            $update = \DB::table('student_teacher')->where('student_id', $request->student_id)->update(['teacher_id' => $request->teacher_id, 'updated_at' => $date,]);
            if ($update) {
                return response()->json([ 'success' => 'Teacher Re-Assigned Successfully'], 200);
            }
        }
        $insert = \DB::table('student_teacher')->insert([
                                'teacher_id' => $request->teacher_id, 
                                'student_id' => $request->student_id,
                                'created_at' => $date,
                                'updated_at' => $date,
                                ]);
        if ($insert) {
            return response()->json([ 'success' => 'Teacher Assigned Successfully'], 200);
        }
    }
    public function teachers()
    {
        Extension::changeLayout('foundation');
        if (session('extension_id') == 'glt') {
            $teachers = Teacher::with('user')->get();
            $allTeachers = Member::with('user')->where('status','Steward')->get();
        }else{
            $teachers = Teacher::with('user')->where('extension_id',session('extension_id'))->get();
            $allTeachers = Member::with('user')->where('status','Steward')->where('extension_id',session('extension_id'))->get();
        }
        return Inertia::render('TeacherComponent',['teachers'=>$teachers, 'allTeachers' => $allTeachers]);
    }

    public function teacherDelete($user_id)
    {
        $getTeacher = Teacher::where('user_id',$user_id)->delete();
        if ($getTeacher) {
            return response()->json([ 'success' => 'Teacher Deleted Successfully'], 200);
        }
    }
    
    public function studentDelete($user_id)
    {
        $getStudent = Student::where('user_id',$user_id)->delete();
        if ($getStudent) {
            return response()->json([ 'success' => 'Student Deleted Successfully'], 200);
        }
    }

    public function students()
    {
        if (session('extension_id') == 'glt') {
            Extension::changeLayout('foundation');
            $students = Student::with('user')->with('teachers')->get();
            // dd($students);

            $allStudents = Member::with('user')->where('status','Foundation School')->get();
            $allTeachers = Teacher::with('user')->get();
        }else{
            Extension::changeLayout('foundation');
            $students = Student::with('user')->with('teachers')->where('extension_id',session('extension_id'))->get();
            dd($students);
            $allStudents = Member::with('user')->where('status','Foundation School')->where('extension_id',session('extension_id'))->get();
            $allTeachers = Teacher::with('user')->where('extension_id',session('extension_id'))->get();
        }
        return Inertia::render('StudentComponent',['students'=>$students, 'allStudents' => $allStudents, 'allTeachers' => $allTeachers]);
    }

    public function index()
    {
        Extension::changeLayout('foundation');
        if (session('extension_id') == 'glt') {
            $stats['allStudents'] = Student::with('user')->count();
            $stats['newStudents'] = Student::with('user')->whereDate('created_at', Carbon::today())->count();
            $stats['awaitingStudents'] = Student::with('user')->where('status', 'pending')->count();
            $stats['allTeachers'] = Teacher::with('user')->count();
        }
        else{
            $stats['allStudents'] = Student::with('user')->where('extension_id',session('extension_id'))->count();
            $stats['newStudents'] = Student::with('user')->whereDate('created_at', Carbon::today())->where('extension_id',session('extension_id'))->count();
            $stats['awaitingStudents'] = Student::with('user')->where('status', 'pending')->where('extension_id',session('extension_id'))->count();
            $stats['allTeachers'] = Teacher::with('user')->where('extension_id',session('extension_id'))->count();
        }
        return Inertia::render('FoundationComponent', ['stats' => $stats]);
    }

    public function moveMember($user_id)
    {
        $getStudent = Student::where('user_id',$user_id)->first();
        if ($getStudent) {
            return response()->json([ 'message' => 'User Already a Student'], 400);
        }
        $getUser = User::find($user_id);
        $getStudentCount = count(Student::all());
        $newId = $getStudentCount + 1;
        if ($newId < 10) {
            $id = "000".$newId;
        }
        elseif ($newId >= 10 AND $newId < 100) {
            $id = "00".$newId;
        }
        elseif ($newId >= 100 AND $newId < 1000) {
            $id = "0".$newId;
        }
        else{
            $id = $newId;
        }

        $data = [];
        $data['student_id'] = 'FBS|'.date('m|Y|').$getUser->extension_id.'|'.$id;
        $data['user_id'] = $user_id;
        $data['extension_id'] = $getUser->extension_id;
        if (Auth::user()->roles[0]->name == 'super-admin' || Auth::user()->roles[0]->name == 'admin' || Auth::user()->roles[0]->name == 'head-of-ministry') {
            $data['status'] = 'approved';
        }
        $student = new Student($data);
        $save = $student->save();
        if ($save) {
            Member::where('id',$getUser->member_id)->update(['status'=>'Foundation School']);
            return response()->json([ 'success' => 'User moved to foundation bible school successfully'], 200);
        }

    }
    public function addTeacher($user_id)
    {
        $getTeacher = Teacher::where('user_id',$user_id)->first();
        if ($getTeacher) {
            return response()->json([ 'message' => 'User Already a Teacher'], 400);
        }
        $getUser = User::find($user_id);
        
        $data = [];
        $data['user_id'] = $user_id;
        $data['extension_id'] = $getUser->extension_id;
        
        $teacher = new Teacher($data);
        $save = $teacher->save();
        if ($save) {
            return response()->json([ 'success' => 'User Assigned to Teach Successfully'], 200);
        }

    }

}
