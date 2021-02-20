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
                        <img src="../../../images/logo.png" class="img-responsive width-150 block mx-auto" alt="bg-img">
                        <h2 class="text-bold-700 text-success text-center">{{ $event->event_name }}</h2>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-body pt-0">

                        <form class="form-horizontal mt-2 mb-2" method="POST" action="/registerUser/{{ $event->event_code }}">
                            @csrf
                                <fieldset class="form-label-group">
                                    <input type="text" name="first_name" required class="form-control">
                                    <label class="font-small-3 text-bold-600">First Name</label>
                                </fieldset>
                                <fieldset class="form-label-group">
                                    <input type="text" name="last_name" required class="form-control">
                                    <label class="font-small-3 text-bold-600">Last Name</label>
                                </fieldset>
                                <fieldset class="form-label-group">
                                    <input type="email" name="email" required class="form-control">
                                    <label class="font-small-3 text-bold-600">Email Address</label>
                                </fieldset>
                                <fieldset class="form-label-group">
                                    <input type="text" name="phone" required class="form-control">
                                    <label class="font-small-3 text-bold-600">Phone Number</label>
                                </fieldset>
                                <fieldset class="form-label-group">
                                    <select class="form-control" required name="extension">
                                        <option value="">Select Extension</option>
                                        @foreach ($extensions as $extension)
                                        <option value="{{ $extension->id }}">{{ $extension->ext_name }}</option>
                                        @endforeach
                                    </select>
                                    <label class="font-small-3 text-bold-600">Extension</label>
                                </fieldset>
                                <ul class="list-unstyled mb-0">
                                    <li class="d-inline-block">
                                        <fieldset>
                                            <div class="vs-checkbox-con vs-checkbox-primary">
                                                <span class="">Gender</span>
                                            </div>
                                        </fieldset>
                                    </li>
                                    <li class="d-inline-block">
                                        <fieldset>
                                            <div class="vs-checkbox-con vs-checkbox-primary">
                                                <input type="radio" name="gender" required value="MALE">
                                                <span class="vs-checkbox vs-checkbox-lg">
                                                    <span class="vs-checkbox--check">
                                                        <i class="vs-icon feather icon-check"></i>
                                                    </span>
                                                </span>
                                                <span class="">MALE</span>
                                            </div>
                                        </fieldset>
                                    </li>
                                    <li class="d-inline-block">
                                        <fieldset>
                                            <div class="vs-checkbox-con vs-checkbox-primary">
                                                <input type="radio" name="gender" required value="FEMALE">
                                                <span class="vs-checkbox vs-checkbox-lg">
                                                    <span class="vs-checkbox--check">
                                                        <i class="vs-icon feather icon-check"></i>
                                                    </span>
                                                </span>
                                                <span class="">FEMALE</span>
                                            </div>
                                        </fieldset>
                                    </li>
                                </ul>
                            <button class="btn btn-success w-100" type="submit">Submit</button>
                        </form>
                        <div class="text-center">
                            <div class="divider-text">You have access code?</div> <br>
                        </div>
                        <a href="/register/event/{{ $event->event_code }}" class="btn btn-warning w-100">Use Access Code</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>


@endsection
