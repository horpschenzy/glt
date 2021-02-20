<!-- Description -->
@extends('layouts/fullLayoutMaster')

@section('title', 'GLT-CIS')

@section('pageStyle')

    <link rel="stylesheet" href="{{ asset('css/pages/authentication.css') }}">

@endsection



@section('content')


<section>
    <div class="row d-flex vh-100 align-items-center justify-content-center">
        <div class="col-xl-5 col-md-8 col-sm-10 col-12 px-md-0 px-2">
            <div class="card text-center w-100 mb-0">
                <div class="card-header justify-content-center pb-0">
                    <div class="card-title">
                        {{--  <h2 class="mb-0">We are launching soon</h2>  --}}
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-body pt-0">
                        <img src="{{ '/'.$event->event_image }}" class="img-responsive block mx-auto" alt="bg-img">
                        <div id="clockFlat" class="card-text text-center getting-started pt-2 d-flex justify-content-center flex-wrap"></div>
                        <div class="divider">
                            <div class="divider-text"><h3> Event Details</h3> </div>
                        </div>
                        {{-- <div class="row"> --}}
                            <h2 class="text-bold-700 text-success text-center">{{ $event->event_name }}</h2>
                        {{-- </div> --}}
                        <div class="container">
                            <div class="row">
                              <div class="col">
                                <h3 class="text-primary"><i class="feather icon-calendar"></i> Date and Time</h3>
                                <p class="text-md font-medium-1 text-primary">{{ date('D, M d, Y,', strtotime($event->event_start_date)).' '.$event->event_start_time }}-</p>
                                <p class="text-md font-medium-1 text-primary">{{ date('D, M d, Y,', strtotime($event->event_end_date)).' '.$event->event_end_time }} </p>
                              </div>
                              <div class="col">
                                <h3 class="text-primary"><i class="feather icon-map-pin"></i> Location</h3>
                                <p class="text-md font-medium-1 text-primary">{{ $event->venue_type }}</p>
                                <p class="text-md font-medium-1 text-primary">{{ $event->location }}</p>
                              </div>
                            </div>
                        </div>

                        <a href="/register/{{ $event->event_code }}" class="btn btn-success w-100">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection
