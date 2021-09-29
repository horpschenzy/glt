<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->date('service_date');
            $table->enum('service_type', ['Sunday Service', 'Special Miracle Service', 'Bible study', 'Vigil', 'SOTM Event'])->default('Sunday Service');
            $table->string('minister_name', 255)->nullable();
            $table->string('topic', 255)->nullable();
            $table->string('duration', 255)->nullable();
            $table->integer('male')->unsigned()->nullable()->default(0);
            $table->integer('female')->unsigned()->nullable()->default(0);
            $table->integer('male_child')->unsigned()->nullable()->default(0);
            $table->integer('female_child')->unsigned()->nullable()->default(0);
            $table->integer('male_teenage')->unsigned()->nullable()->default(0);
            $table->integer('female_teenage')->unsigned()->nullable()->default(0);
            $table->integer('total')->unsigned()->nullable()->default(0);
            $table->integer('no_of_guest')->unsigned()->nullable()->default(0);
            $table->integer('no_of_new_member')->unsigned()->nullable()->default(0);
            $table->integer('born_again_converts')->unsigned()->nullable()->default(0);
            $table->integer('holy_ghost_baptism')->unsigned()->nullable()->default(0);
            $table->string('start_time')->nullable();
            $table->string('end_time')->nullable();
            $table->longText('notes')->nullable();
            $table->unsignedBigInteger('ministry_id');
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
        Schema::dropIfExists('reports');
    }
}
