@extends('base')

@section('style')
    <link href="{{ asset('assets/vendor/datatables/css/jquery.dataTables.min.css') }}" rel="stylesheet">
    <!-- Custom Stylesheet -->
@endsection
@section('contenu')

    <div class="content-body">
        <div class="container-fluid">
            <div id="ListeAnalyse">


            </div>

        </div>



    </div>


@endsection

@section('script')
    <script src="{{ asset('js/app.js') }}"></script>
@endsection
@section('scriptSecondaire')
    <script src="{{ asset('assets/vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('assets/js/plugins-init/datatables.init.js') }}"></script>

@endsection
