<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>CMS| Login</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png">
    <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">

</head>

<body class="h-100">
    <div class="authincation h-100">
        <div class="container h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-6">
                    <div class="authincation-content">
                        <div class="row no-gutters">
                            <div class="col-xl-12">
                                <div class="auth-form">

                                    @error('password')
                                        <div class="container-fluid">
                                            <div class="alert alert-danger alert-block">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                <strong>{{ $message }}</strong> <i
                                                    class="fa fa-exclamation-triangle"></i>
                                            </div>
                                        </div>
                                    @enderror

                                   

                                    <h4 class="text-center mb-4">Initialisez votre mot de passe pour la premiere
                                        connexion</h4>
                                    <form action="{{ url('init_password') }}" method="POST">
                                        @csrf
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Mot de passe</strong></label>
                                            <input type="password" class="form-control" value="" name="password"
                                                required>
                                        </div>
                                        <div class="form-group">
                                            <label class="mb-1"><strong>Mot de passe de
                                                    confirmation</strong></label>
                                            <input type="password" class="form-control" value=""
                                                name="password_confirmation" required>
                                        </div>
                                        <div class="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div class="form-group">
                                                {{-- <div class="custom-control custom-checkbox ml-1">
                                                    <input type="checkbox" class="custom-control-input"
                                                        id="basic_checkbox_1">
                                                    <label class="custom-control-label" for="basic_checkbox_1">
                                                        Rappelez-vous ma préférence
                                                    </label>
                                                </div> --}}
                                            </div>
                                            {{-- <div class="form-group">
                                                <a href="page-forgot-password.html">Mot de passe oublié?</a>
                                            </div> --}}
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary btn-block">Se
                                                connecter</button>
                                        </div>
                                    </form>
                                    {{-- <div class="new-account mt-3">
                                        <p>Don't have an account? <a class="text-primary"
                                                href="./page-register.html">Sign up</a></p>
                                    </div> --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!--**********************************
        Scripts
    ***********************************-->
    <!-- Required vendors -->
    <script src="{{ asset('assets/vendor/global/global.min.js') }}"></script>
    <script src="{{ asset('assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js') }}"></script>
    <script src="{{ asset('assets/js/custom.min.js') }}"></script>
    <script src="{{ asset('assets/js/deznav-init.js') }}"></script>

    <script>
        $(document).ready(function() {
            // $('#btnSubmit').click(function(e) {
            //     // e.preventDefault()
            //     if ($('#passwordConfirme').val() != $('#password').val()) {
            //         $('#style').removeAttr('style')
            //     }
            // })
        })
    </script>

</body>

</html>
