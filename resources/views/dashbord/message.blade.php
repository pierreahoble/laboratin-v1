{{-- @if (count(Session) > 0)
    <p></p>
@else
    
@endif --}}

@if (Session::has('succes'))
    <div class="container-fluid">
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ Session::get('succes') }} </strong> <i class="fa fa-check"></i>
        </div>
    </div>
@endif



@if (Session::has('error'))
    <div class="container-fluid">
        <div class="alert alert-danger alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ Session::get('error') }}</strong> <i class="fa fa-exclamation-triangle"></i>
        </div>
    </div>
@endif


@if (Session::has('warning'))

    <div class="container-fluid">
        <div class="alert alert-warning alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong class="text-center"><i class="fa fa-exclamation-triangle"></i>
                {{ Session::get('warning') }}</strong>
        </div>
    </div>
@endif


@if (Session::has('info'))
    <div class="container-fluid">
        <div class="container alert alert-info alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ Session::get('info') }}</strong> <i class="fa fa-info"></i>
        </div>
    </div>
@endif


@if ($errors->any())

    <div class="container-fluid">
        <div class="text-center alert alert-danger">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <i class="fas fa-frown"></i> Oups!! une erreur s'est produite ... Vérifiez les champs s'il vous plait
        </div>
    </div>
@endif

{{-- @if ($errors->any())

<div class="container-fluid">
    <div class="alert alert-danger">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <ul>
            @foreach ($errors->all() as $error)
                 <li>{{$error}}</li>        
            @endforeach
        </ul>
    </div>    
</div>
@endif --}}
