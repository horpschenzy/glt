<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('event_name', 500);
            $table->string('event_code', 500);
            $table->string('event_type', 500);
            $table->text('event_url', 500);
            $table->date('event_start_date');
            $table->string('event_start_time');
            $table->date('event_end_date');
            $table->string('event_end_time');
            $table->string('venue_type', 500);
            $table->string('location', 500)->nullable();
            $table->string('event_image', 500)->nullable();
            $table->enum('event_status', ['PUBLISHED', 'DRAFT'])->default('PUBLISHED');
            $table->enum('status', ['NOT STARTED', 'ONGOING', 'FINISHED'])->default('NOT STARTED');
            $table->integer('event_attendee')->unsigned()->nullable();
            $table->unsignedBigInteger('extension_id')->default(0);
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
        Schema::dropIfExists('events');
    }
}
