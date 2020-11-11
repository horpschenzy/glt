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
    Route::post('/member/unit/update', 'MemberController@updateUnit');
    Route::get('/member/delete/{id}', 'MemberController@destroy');
    Route::get('/member/update/{id}', 'MemberController@show');
    Route::get('/members/add', 'MemberController@create');

    Route::get('/members', 'MemberController@index')->name('members');
    Route::post('/follow-up', 'MemberController@followUp');


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
});

Route::get('/login','LoginController@loginView')->name('login');
Route::post('/customLogin','LoginController@login');
Route::post('/logout','LoginController@logout');

