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
                        <h2 class="mb-0">Register for the Event</h2>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-body pt-0">
                        <img src="../../../images/logo.png" class="img-responsive width-150 block mx-auto" alt="bg-img">
                        <h2 class="text-bold-700 text-success text-center">{{ $event->event_name }}</h2>
                        <form class="form-horizontal mt-2 mb-2" method="POST" action="/checkAccessCode/{{ $event->event_code }}">
                            @csrf
                            <fieldset class="form-label-group">
                                <input type="text" class="form-control" required name="access_code" id="user-email" placeholder="Access Code">
                                <label for="user-email">Input Access Code</label>
                            </fieldset>
                            <fieldset class="form-label-group">
                                <input type="text" class="form-control" id="user-email" value="GLT Light House {{ ($event->extension && ($event->extension->ext_name != 'null' || $event->extension != '') ? $event->extension->ext_name : 'GLOBAL' ) }}" disabled>
                                <label for="user-email">Event Extension</label>
                            </fieldset>
                            <button class="btn btn-success w-100" type="submit">Submit</button>
                        </form>
                        <div class="text-center">
                            <div class="divider-text">Forgot your access code?</div> <br>
                            <a href="http://" class="divider-text">click here! Input email address</a>
                        </div><br>
                        <div class="divider-text">Don't Have access code?</div> <br>
                        <a href="/register/{{ $event->event_code }}" class="btn btn-outline-success w-100">Register</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection
