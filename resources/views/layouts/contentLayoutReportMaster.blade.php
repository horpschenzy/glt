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

        <title>@yield('title') GLT-CIS Central Information System</title>
        <link rel="shortcut icon" type="image/x-icon" href="../images/ico/glt.ico">

        {{-- Include core + vendor Styles --}}
        @include('panels/styles')

        {{-- Include page Style --}}
        @yield('mystyle')

    </head>

    {{-- {!! Helper::applClasses() !!} --}}
    @php 
    $configData = Helper::applClasses();
    @endphp
    
    <body class="vertical-layout vertical-menu-modern 2-columns ecommerce-application {{ $configData['bodyClass'] }} {{ $configData['theme'] }} {{ $configData['navbarType'] }} {{ $configData['sidebarClass'] }} {{ $configData['footerType'] }}  footer-light" data-menu="vertical-menu-modern" data-col="2-columns">
    <!--<body class="vertical-layout vertical-menu-modern semi-dark-layout content-detached-left-sidebar ecommerce-application navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="content-detached-left-sidebar" data-layout="semi-dark-layout">-->

        {{-- Include Sidebar --}}
        @include('panels.sidebar')

        <!-- BEGIN: Content-->
        <div class="app-content content">
            <!-- BEGIN: Header-->
            <div class="content-overlay"></div>
            <div class="header-navbar-shadow"></div>

            {{-- Include Navbar --}}
            @include('panels.navbar')
            
            <div class="content-wrapper">
                @include('inc.message')

                {{-- Include Breadcrumb --}}
                @include('panels.breadcrumb')
               

                <div class="content-body">

                    {{-- Include Startkit Content --}}
                    @yield('content')

                </div>

            </div>

        </div>
        <!-- End: Content-->

        <div class="sidenav-overlay"></div>
        <div class="drag-target"></div>

        {{-- include footer --}}
        @include('panels/footer')

    
    <!-- BEGIN Vendor JS-->
    
        {{-- include default scripts --}}
         @include('panels/scripts') 

        {{-- Include page script --}}
        @yield('myscript')
        @stack('reportscripts')

    </body>
</html>
