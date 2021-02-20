<?php

namespace App\Http\Controllers;

use App\Models\Extension;
use App\Models\Member;
use App\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Validator;
class ExtensionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $extensions = Extension::all();
        return Inertia::render('ExtensionComponent', ['extensions' => $extensions]);
    }

    public function store(Request $request)
    {
        $messages = [
            'ext_email.required' => 'We need to know your e-mail address!',
            'ext_name.required' =>  'Extension Name is required!',
            'ext_location.required' =>  'Extension Location is required!',
            'ext_phone.required' =>  'Extension Phone Number is required!',
            'ext_owner.required' =>  'We need to know your e-mail addressthe pastor in charge!',
        ];
        $validate  = Validator::make($request->all(), [
            // 'ext_name' => 'required|max:255|unique:extensions',
            'ext_location' => 'required',
            'ext_owner' => 'required|max:255',
            // 'ext_email' => 'required|email|unique:extensions,ext_email|max:255',
            'ext_phone' => 'required',
            // 'ext_image' => 'required'
        ],$messages);
        if($validate->fails()){
            return response()->json(['message' => $validate->messages()->first()], 500);
        }

        if ($request->id) {

            $image_parts = explode(";base64,", $request->ext_image);
            if(isset($image_parts[1])) {
                if (!str_contains($request->ext_image, '/images/extension/')) {
                    $folderPath = "images/extension/";
                    $image_parts = explode(";base64,", $request->ext_image);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $image = $file = $folderPath . uniqid() . '.' . $image_type;
                    file_put_contents($file, $image_base64);
                }
            }else{
                $image = $request->ext_image;
            }
            Extension::where('id',$request->id)
                    ->update([
                            'ext_name' => $request->ext_name,
                            'ext_email' => $request->ext_email,
                            'ext_phone' => $request->ext_phone,
                            'ext_owner' => $request->ext_owner,
                            'ext_location' => $request->ext_location,
                            'ext_image'    => $image,
                        ]);
            return response()->json([ 'success' => 'Extension Edited Successfully'], 200);
        }
        else{
            $data = $request->only(['ext_name','ext_location','ext_owner','ext_phone','ext_email','ext_image']);
            if($request->ext_image){
                if (!str_contains($request->ext_image, '/images/extension/')){

                    $folderPath = "images/extension/";
                    $image_parts = explode(";base64,", $request->ext_image);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $data['ext_image'] = $file = $folderPath . uniqid() . '.'.$image_type;
                    file_put_contents($file, $image_base64);
                }

            }
            $extension = new Extension($data);
            $extension->save();
            return response()->json([ 'success' => 'Extension Added Successfully'], 200);
        }
    }


    public function destroy($extension)
    {
        $checkIfMemberExist = Member::where('extension_id', $extension)->first();
        $checkIfUserExist = User::where('extension_id', $extension)->first();
        

        if($checkIfUserExist){
            return response()->json([ 'error' => "Extension Can't Be Deleted. Delete Extension Users first"], 400);
        }
        if($checkIfMemberExist){
            return response()->json([ 'error' => "Extension Can't Be Deleted. Delete Extension members first"], 400);
        }
        Extension::where('id',$extension)->delete();
        return response()->json([ 'success' => 'Extension Deleted Successfully'], 200);
    }
}
