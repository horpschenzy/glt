
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
    <title>GLT-CIS</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script type="text/javascript">
        window.Laravel = {
            csrfToken: "{{ csrf_token() }}",
            jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():null !!}
        }
    </script> 


    {{-- Include core + vendor Styles --}}
    @include('panels/styles')

    {{-- Include page Style --}}
    @yield('mystyle')
  </head>

  <body class="vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static" data-menu="vertical-menu-modern" data-col="2-columns" id="body">
  {{--  <body class="vertical-layout vertical-menu-modern 2-columns menu-collapsed  navbar-static footer-static   blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="2-columns">  --}}

    @inertia

    <div class="sidenav-overlay"></div>

    <div class="drag-target"></div>

        {{-- include footer --}}
        @include('panels/footer')

        {{-- include default scripts --}}
        @include('panels/scripts')

        {{-- Include page script --}}
        @yield('myscript')



  </body>
</html>
