<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
    <title>Analyse Hemostase</title>
</head>

<body>
    <div id="main-wrapper">


        @yield('contenu')

    </div>






    @yield('script')
    <script src="{{ asset('assets/vendor/global/global.min.js') }}"></script>
    {{-- <script src="{{ asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/vendor/chart.js/Chart.bundle.min.js') }}"></script> --}}
    <script src="{{ asset('assets/js/custom.min.js') }}"></script>
    <script src="{{ asset('assets/js/deznav-init.js') }}"></script>

</body>

</html>
