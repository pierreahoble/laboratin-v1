<!DOCTYPE html>
<html lang="fr">


<!-- Mirrored from eres.dexignzone.com/xhtml/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 23 Oct 2021 12:25:25 GMT -->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>CMS | Tableau de bord </title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicon.png">
    <link href="{{ asset('assets/vendor/owl-carousel/owl.carousel.css') }}" rel="stylesheet">
    {{-- <link href="{{ asset('assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css') }}" rel="stylesheet"> --}}
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
    {{-- <link href="../../cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet"> --}}
    <style type="text/css" media="print">
        table {
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            padding: 10px;
        }

    </style>

</head>

<body>




    <div id="main-wrapper">


        <div class="mt-5">

            <div class="container">
                <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Categorie</li>
                        <li class="list-group-item">Nom Prenom Patient</li>
                        <li class="list-group-item">Analyse</li>
                      </ul>
                      <br>
                      <hr>
                </div>
                <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Categorie</li>
                        <li class="list-group-item">Nom Prenom Patient</li>
                        <li class="list-group-item">Analyse</li>
                      </ul>
                      <br>
                      <hr>
                </div>

                <div class="col-md-12">
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">Categorie</li>
                        <li class="list-group-item">Nom Prenom Patient</li>
                        <li class="list-group-item">Analyse</li>
                      </ul>
                      <br>
                      <hr>
                </div>


            </div>




        </div>





    </div>

    @yield('script')
    <!-- Required vendors -->
    <script src="{{ asset('assets/vendor/global/global.min.js') }}"></script>
    {{-- <script src="{{ asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('assets/vendor/chart.js/Chart.bundle.min.js') }}"></script> --}}
    <script src="{{ asset('assets/js/custom.min.js') }}"></script>
    <script src="{{ asset('assets/js/deznav-init.js') }}"></script>
    {{-- <script src="{{ asset('assets/vendor/owl-carousel/owl.carousel.js') }}"></script> --}}


    @yield('scriptSecondaire')

    <!-- Apex Chart -->
    {{-- <script src="{{ asset('assets/vendor/apexchart/apexchart.js') }}"></script> --}}

    <!-- Dashboard 1 -->
    {{-- <script src="{{ asset('assets/js/dashboard/dashboard-1.js') }}"></script> --}}

</body>

<!-- Mirrored from eres.dexignzone.com/xhtml/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 23 Oct 2021 12:26:11 GMT -->

</html>
