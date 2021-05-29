<?php


namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Income;
use App\Models\Member;
use App\Models\Report;
use App\Models\Expense;
use App\Models\Ministry;
use App\Models\CareReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    public function generateServiceReport($date, $service_type)
    {
        $churchMinistry = Ministry::where('min_name', 'Church Secretariat')->first();
        $protocolMinistry = Ministry::where('min_name', 'Protocol Ministry')->first();
        $followMinistry = Ministry::where('min_name', 'Follow up Ministry')->first();
        $mediaMinistry = Ministry::where('min_name', 'Media Ministry')->first();
        $careMinistry = Ministry::where('min_name', 'Care Ministry')->first();
        $getCareServiceReport = Report::where('service_date',$date)->where('service_type', $service_type)->where('ministry_id', $careMinistry->id)->where('extension_id', session('extension_id'))->first();
        $getMediaServiceReport = Report::where('service_date',$date)->where('service_type', $service_type)->where('ministry_id', $mediaMinistry->id)->where('extension_id', session('extension_id'))->first();
        $getFollowUpServiceReport = Report::where('service_date',$date)->where('service_type', $service_type)->where('ministry_id', $followMinistry->id)->where('extension_id', session('extension_id'))->first();
        $getChurchServiceReport = Report::where('service_date',$date)->where('service_type', $service_type)->where('ministry_id', $churchMinistry->id)->where('extension_id', session('extension_id'))->first();
        $getProtocolMinistryServiceReport = Report::where('service_date',$date)->where('service_type', $service_type)->where('ministry_id', $protocolMinistry->id)->where('extension_id', session('extension_id'))->first();
        return Inertia::render('GenerateReportComponent', ['report' => $getChurchServiceReport, 
                                                            'service_type' => $service_type,
                                                            'service_date' => $date,
                                                            'protocolReport' => $getProtocolMinistryServiceReport,
                                                            'followReport' => $getFollowUpServiceReport,
                                                            'mediaReport' => $getMediaServiceReport,
                                                            'careReport' => $getCareServiceReport,
                                                        ]);
    }

    public function viewServiceReport($id)
    {
        $getMemberDetails = Member::where('id', Auth::user()->member_id)->first();
        $getServiceReport = Report::where('id',$id)->where('ministry_id',$getMemberDetails['ministry_id'])->first();

    }
    public function deleteReport($id){
        Report::where('id',$id)->delete();
        return response()->json([ 'success' => 'Service Report Deleted Successfully'], 200);
    }
    public function deleteCareReport($id){
        CareReport::where('id',$id)->delete();
        return response()->json([ 'success' => 'Care Report Deleted Successfully'], 200);
    }
    public function viewReport()
    {
        if (session('extension_id') == 'glt') {
            $getMinistryName = Ministry::where('id', $getMemberDetails)->first()->min_name;
            $reports = Report::all();
            $ahomcarereports = CareReport::with('ministry')->where('user_type', 'ahom')->get();
            $carereports = CareReport::with('ministry')->where('user_type', 'hom')->get();
        }else{
            if (Auth::user()->roles[0]->name == 'super-admin' || Auth::user()->roles[0]->name == 'admin' ) {
                $getMemberDetails = Member::where('id', Auth::user()->member_id)->first()->ministry_id;
                if ($getMemberDetails) {
                    $getMinistryName = Ministry::where('id', $getMemberDetails)->first()->min_name;
                    $reports = Report::where('ministry_id', $getMemberDetails)->where('extension_id', session('extension_id'))->get();
                }else{
                    $getMinistryName = 'glt';
                    $reports = Report::where('extension_id', session('extension_id'))->get();
                }
                $ahomcarereports = CareReport::with('ministry')->where('user_type', 'ahom')->where('extension_id', session('extension_id'))->get();
                $carereports = CareReport::with('ministry')->where('user_type', 'hom')->where('extension_id', session('extension_id'))->get();

            }
            else{
                $getMemberDetails = Member::where('id', Auth::user()->member_id)->first()->ministry_id;
                $getMinistryName = Ministry::where('id', $getMemberDetails)->first()->min_name;
                $reports = Report::where('ministry_id', $getMemberDetails)->where('extension_id', session('extension_id'))->get();

                $ahomcarereports = CareReport::with('ministry')->where('user_type', 'ahom')->where('extension_id', session('extension_id'))->get();
                $carereports = CareReport::with('ministry')->where('user_type', 'hom')->where('extension_id', session('extension_id'))->get();
            }
        }
            return Inertia::render('ViewReportComponent', ['ministry_name' => $getMinistryName, 'reports' => $reports, 'carereports' => $carereports, 'ahomcarereports' => $ahomcarereports]);
    }

    public function serviceReport(Request $request)
    {

        $validate  = Validator::make($request->all(), [
            'service_date' => 'required',
            'service_type' => 'required',
        ]);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        $data = $request->only([
            'service_date','service_type','minister_name','topic','duration','male','female', 'male_child','female_child',
            'male_teenage', 'female_teenage', 'total', 'no_of_guest', 'no_of_new_member', 'born_again_converts', 'holy_ghost_baptism',
            'start_time', 'end_time', 'notes']);
        $getMemberDetails = Member::where('id', Auth::user()->member_id)->first();
        if (!$getMemberDetails['ministry_id']) {
            return response()->json([ 'error' => "You need to belong to a ministry."], 400);
        }
        $data['ministry_id'] = $getMemberDetails['ministry_id'];
        $data['extension_id'] = session('extension_id');
        $checkIfExist = Report::where('service_date', $request->service_date)->where('service_type', $request->service_type)->where('ministry_id', $getMemberDetails['ministry_id'])->where('extension_id', $data['extension_id'])->first();
        if ($checkIfExist) {
            return response()->json([ 'error' => "Report has been added for ".$request->service_type." today"], 400);
        }

        $report = new Report($data);
        if($report->save()){
            return response()->json([ 'success' => $request->service_type.' Report added Successfully'], 200);
        }

    }
    public function careReport(Request $request)
    {

        $validate  = Validator::make($request->all(), [
            'month' => 'required',
            'ministry_id' => 'required',
        ]);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }
        $data = $request->only([
            'yearVision','month','ministry_id','monthVision','goals','achieved','comments', 'ministry_id', 'user_type']);
        $getMemberDetails = Member::where('id', Auth::user()->member_id)->first();
        if (!$getMemberDetails['ministry_id']) {
            return response()->json([ 'error' => "You need to belong to a ministry."], 400);
        }
        $data['ministry_id'] = $getMemberDetails['ministry_id'];
        $data['extension_id'] = session('extension_id');
        $checkIfExist = CareReport::where('month', $request->month)->where('ministry_id', $request->ministry_id)->where('extension_id', $data['extension_id'])->first();
        if ($checkIfExist) {
            return response()->json([ 'error' => "Care Report has been added for the month of ".ucfirst($request->month)], 400);
        }

        $report = new CareReport($data);
        if($report->save()){
            if (count($request->rows) > 0) {
                foreach($request->rows AS $row){
                    $saveIncome = [];
                    $saveIncome['item'] = $row['item'];
                    $saveIncome['description'] = $row['description'];
                    $saveIncome['amount'] = $row['amount'];
                    $saveIncome['care_report_id'] = $report->id;
                    $income = new Income($saveIncome);
                    $income->save();
                }
            }
            
            if (count($request->expensesRows) > 0) {
                foreach($request->expensesRows AS $row){
                    $saveExpense = [];
                    $saveExpense['item'] = $row['item'];
                    $saveExpense['description'] = $row['description'];
                    $saveExpense['amount'] = $row['amount'];
                    $saveExpense['care_report_id'] = $report->id;
                    $expense = new Expense($saveExpense);
                    $expense->save();
                }
            }
            return response()->json([ 'success' => 'Care Report added Successfully'], 200);
        }

    }

    public function index(){
        $getMemberDetails = Member::where('id', Auth::user()->member_id)->first()->ministry_id;
        if ($getMemberDetails) {
            $getMinistryName = Ministry::where('id', $getMemberDetails)->first()->min_name;
        }else if (Auth::user()->roles[0]->name == 'super-admin' || Auth::user()->roles[0]->name == 'admin' ) {
            $getMinistryName = 'glt';
        }
        $ministries = Ministry::all();
        return Inertia::render('ReportsComponent', ['ministry_name' => $getMinistryName, 'ministries' => $ministries]);
    }


}
