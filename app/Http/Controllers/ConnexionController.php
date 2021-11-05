<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\User_analyse;
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

    public function example()
    {
        return view('exemple');
    }






    public function view_add_user()
    {
        return view('dashbord.adduser');
    }


    public function add_user(REQUEST $request)
    {
        $data = $request['data'];

        $user = User::create([
            'nom_user'=>$request['nom_user'],
            'email'=>$request['email_user'],
            'password'=>bcrypt('12345'),
            'prenom_user'=>$request['prenom_user'],
            'adresse_user'=>$request['nom_user'],
            'telephone_user'=>$request['tel_user'],
            'pseudo'=>$request['pseudo_user']
        ]);

        foreach ($data as $key => $value) {
           
            User_analyse::create([
                'user_id'=>$user->id,
                'nature_analyse_id'=>$value['id']
            ]);
        }

        $success ='SUCCESS';

        return response()->json($success, 200);

    }



    //recuper les anlyse utilisateur 
    public function init(REQUEST $request)
    {
        $data = User_analyse::all();
        return $request;
    }
}
