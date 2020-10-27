<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('other_names')->nullable();
            $table->string('email_address')->unique();
            $table->date('dob')->nullable();
            $table->string('local_extension')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('image')->nullable();
            $table->string('address')->nullable();
            $table->string('occupation')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zipcode')->nullable();
            $table->string('school')->nullable();
            $table->string('course_of_study')->nullable();
            $table->string('hostel_address')->nullable();
            $table->string('home_address')->nullable();
            $table->string('school_level')->nullable();
            $table->string('education_category')->nullable();
            $table->date('foundation_school_start_date')->nullable();
            $table->date('foundation_school_end_date')->nullable();
            $table->string('professional_occupation')->nullable();
            $table->string('employer')->nullable();
            $table->string('office_address')->nullable();
            $table->string('position')->nullable();
            $table->string('business_name')->nullable();
            $table->string('business_nature')->nullable();
            $table->string('business_address')->nullable();
            $table->string('business_position')->nullable();
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('father_occupation')->nullable();
            $table->string('parent_email')->nullable();
            $table->string('parent_phone_number')->nullable();
            $table->string('parent_address')->nullable();
            $table->string('parent_marital_status')->nullable();
            $table->string('ministry_type')->nullable();
            $table->string('current_extension')->nullable();
            $table->string('department')->nullable();
            $table->enum('requirement', ['born_again', 'spirit_filled'])->nullable()->default('born_again');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
