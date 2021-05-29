<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCareReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('care_reports', function (Blueprint $table) {
            $table->id();
            $table->string('month', 100);
            $table->longText('yearVision')->nullable();
            $table->longText('monthVision')->nullable();
            $table->longText('goals')->nullable();
            $table->longText('achieved')->nullable();
            $table->longText('comments')->nullable();
            $table->unsignedBigInteger('ministry_id');
            $table->unsignedBigInteger('extension_id');
            $table->timestamps();
            $table->foreign('ministry_id')->references('id')->on('ministries')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('care_reports');
    }
}
