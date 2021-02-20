<?php

use App\Models\Member;
use App\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddColumsToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('members', function (Blueprint $table) {
            $table->unsignedBigInteger('extension_id')->nullable()->change();
        });

        $member = new Member();
        $member->first_name = 'Super';
        $member->last_name  = 'Admin';
        $member->other_names = 'Adminer';
        $member->email_address = 'superadmin@me.com';
        $member->dob = '1993-09-24';
        $member->image = 'images/portrait/small/avatar-s-10.png';
        $member->address = 'i';
        $member->save();

        $user = User::where('email','superadmin@me.com')->first();
        $user->member_id = $member->id;
        $user->save();


        echo "UPDATED SUCCESSFULLY";


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
