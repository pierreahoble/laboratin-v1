<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
Use Session;

class ConnexionController extends Controller
{
    public function index()
    {
        return view('dashbord.login');
    }


    public function login(REQUEST $request)
    {
        $password=request('password');
        $email =request('email');
        $user=Auth::attempt(['email' => $email, 'password' => $password]);

        if ($user) {
            Session::flash('succes','Succès. Vous êtes connecté');
            return redirect('dashbordAdmin');
        }else{
            Session::flash('error','Echec. Email ou Mot de Passe incorrecte');
            return  redirect()->back();
        }
    }
}
