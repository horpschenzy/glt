@isset($pageConfigs)
    @if(count($pageConfigs) > 0)
        @foreach ($pageConfigs as $config => $val)
            {{ Config::set('custom.custom.'.$config, $val) }}
        @endforeach
    @endif
@endisset

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>@yield('title') - Central Information System</title>
        <link rel="shortcut icon" type="image/x-icon" href="../images/ico/glt.ico">

        {{-- Include core + vendor Styles --}}
        @include('panels/styles')

        {{-- Include page Style --}}
        @yield('pageStyle')

    </head>


    <body class="vertical-layout vertical-menu-modern 2-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="2-column">

        <!-- BEGIN: Content-->
        <div class="app-content content">
            <div class="content-wrapper">
                <div class="content-body">

                    {{-- Include Startkit Content --}}
                    @yield('content')

                </div>
            </div>
        </div>
        <!-- End: Content-->

        {{-- include default scripts --}}
        @include('panels/scripts')

        {{-- Include page script --}}
        @yield('pageScript')
        <script>
            @if(Session::has('message'))
                var type = "{{ Session::get('alert-type', 'info') }}";
                var alert_js_type = "{{ Session::get('alert_js_type', 'toastr') }}";
                switch(type){
                    case 'info':
                        (alert_js_type == 'sweetalert') ?  Swal.fire({type: 'info', title: "{{ Session::get('message') }}"})  : toastr.info("{{ Session::get('message') }}");
                        break;
    
                    case 'warning':
                        (alert_js_type == 'sweetalert') ?  Swal.fire({type: 'warning', title: "{{ Session::get('message') }}"})  : toastr.warning("{{ Session::get('message') }}");
                        break;
    
                    case 'success':
                        (alert_js_type == 'sweetalert') ?  Swal.fire({type: 'success', title: "{{ Session::get('message') }}"})  : toastr.success("{{ Session::get('message') }}");
                        break;
    
                    case 'error':
                        (alert_js_type == 'sweetalert') ?  Swal.fire({type: 'error', title: "{{ Session::get('message') }}"})  : toastr.error("{{ Session::get('message') }}");
                        break;
                }
            @endif
        </script>
    </body>
</html>
