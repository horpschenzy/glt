<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test','TestController@test')->name('test');
Route::group(['middleware' => ['auth']], function() {
    Route::get('/dashboard','DashboardController@index')->name('dashboard');
    Route::get('/dashboard/home','DashboardController@view')->name('dashboard.home');
    Route::get('/changeExtension/{id}','DashboardController@changeExtension');


    //extension
    Route::get('/extension','ExtensionController@index')->name('extension');
    Route::get('extension/delete/{id}','ExtensionController@destroy');
    Route::post('/extension/add','ExtensionController@store');

    //members
    Route::post('/member/personal/update', 'MemberController@updatePersonal');
    Route::post('/member/parent/update', 'MemberController@updateParent');
    Route::post('/member/career/update', 'MemberController@updateCareer');
    Route::post('/member/add/personal', 'MemberController@storePersonal');
    Route::post('/member/add/guest', 'MemberController@addGuest');
    Route::post('/member/guest/update', 'MemberController@updateGuest');

    Route::post('/member/unit/update', 'MemberController@updateUnit');
    Route::get('/member/delete/{id}', 'MemberController@destroy');
    Route::get('/member/update/{id}', 'MemberController@show');
    Route::get('/members/add', 'MemberController@create');
    Route::get('/members/guest/add', 'MemberController@createGuest');

    Route::get('/members', 'MemberController@index')->name('members');
    Route::get('/registered-non-members', 'MemberController@registerdNonMembers');
    Route::post('/follow-up', 'MemberController@followUp');

    Route::get('/profile', 'ProfileController@index')->name('profile');
    Route::get('/member/profile', 'ProfileController@memberProfile')->name('member.profile');

    Route::post('/profile-update', 'ProfileController@store');
    Route::post('/profile-picture', 'ProfileController@editImage');
    Route::post('/change-password', 'ProfileController@changePassword');


    //follow-up
    Route::post('/follow-up', 'MemberController@followUp');
    Route::get('/report', 'ReportController@index');

    //Ministries
    Route::get('/ministry', 'MinistryController@index')->name('ministry');
    Route::get('ministry/delete/{id}','MinistryController@destroy');
    Route::post('/ministry/add','MinistryController@store');

    //Permission
    Route::get('/permissions','PermissionController@index');
    Route::get('permission/delete/{id}','PermissionController@destroy');
    Route::post('/permission/add','PermissionController@store');

    //roles
    Route::get('/roles','RolesController@index');
    Route::get('role/delete/{id}','RolesController@destroy');
    Route::post('/role/add','RolesController@addRole');
    Route::post('/assign/permission','RolesController@assignPermission');
    Route::post('/getRolePermissions', 'RolesController@getRolePermissions');

    //Need Help

    Route::get('/help', 'DeveloperHelpController@index');
    Route::post('/help/add','DeveloperHelpController@store');


    //Units
    Route::get('/unit', 'UnitController@index')->name('unit');
    Route::get('unit/delete/{id}','UnitController@destroy');
    Route::post('/unit/add','UnitController@store');

    //States
    Route::get('/getStates/{country}','MemberController@getStates');

    //Users
    Route::get('/users','UsersController@index');
    Route::get('user/delete/{id}','UsersController@destroy');
    Route::post('/user/add','UsersController@store');

    //follow-up
    Route::get('feedback/{id}','FeedbackController@index');
    Route::post('/add/feedback','FeedbackController@store');

    //foundation
    Route::get('/foundation/dashboard','FoundationController@index')->name('foundation.dashboard');
    Route::get('/member/move/{id}', 'FoundationController@moveMember');
    Route::get('/students', 'FoundationController@students');
    Route::get('/student/delete/{id}', 'FoundationController@studentDelete');
    Route::get('/add/teacher/{id}', 'FoundationController@addTeacher');
    Route::get('/teacher/delete/{id}', 'FoundationController@teacherDelete');
    Route::get('/teachers', 'FoundationController@teachers');
    Route::post('/assign/teacher', 'FoundationController@assignTeacher');

    //course
    Route::get('/course','CourseController@index')->name('course');
    Route::get('course/delete/{id}','CourseController@destroy');
    Route::post('/course/add','CourseController@store');
    Route::get('/add/course','CourseController@addCourse');

    //event
    Route::get('/event','EventController@index')->name('event');
    Route::get('/edit/event/{id}','EventController@show');
    Route::post('/event','EventController@store');
    Route::post('/moveUserIn','EventController@moveUserIn');
    Route::post('/searchCheckIns/{event_id}','EventController@searchCheckIns');
    Route::get('/add/event','EventController@create');
    Route::get('/delete/event/{id}','EventController@destroy');
    Route::get('/check-in/event/{event_code}','EventController@checkIn');
    Route::get('/attendee/event/{event_code}','EventController@attendee');
});

Route::get('/login','LoginController@loginView')->name('login');
Route::get('/e/{slug}','LoginController@viewEvent');
Route::get('/register/event/{slug}','LoginController@registerEvent');
Route::get('/register/{slug}','LoginController@newRegisterEvent');
Route::post('/customLogin','LoginController@login');
Route::post('/checkAccessCode/{event_code}','LoginController@checkAccessCode');
Route::post('/registerUser/{event_code}','LoginController@registerUser');
Route::post('/logout','LoginController@logout');
Route::get('/testmail','LoginController@testmail');

