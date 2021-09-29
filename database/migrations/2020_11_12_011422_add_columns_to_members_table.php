<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('members', function (Blueprint $table) {
            //
            $table->enum('speak_in_tongue',['yes','no'])->nullable()->default('no');
            $table->enum('baptized',['yes','no'])->nullable()->default('no');
            $table->date('date_of_baptism')->nullable();
            $table->text('service_status')->nullable();
            $table->string('visit_guest')->nullable();
            $table->string('find_church')->nullable();
            $table->string('gender')->nullable();
            $table->string('birthday')->nullable();
            $table->string('age_range')->nullable();
            $table->string('join_church')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('members', function (Blueprint $table) {
            //
        });
    }
}
