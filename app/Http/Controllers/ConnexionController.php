<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\User_analyse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
Use Session;

class ConnexionController extends Controller
{
    public function index()
    {
        return view('dashbord.login');
    }


    public function login(REQUEST $request)
    {
    //    return $user = User::where('email','honore@gmail.com')
    //     ->update(['password'=>bcrypt(request('password'))]);


        $password=request('password');
        $email =request('email');
        $user=Auth::attempt(['email' => $email, 'password' => $password]);
        
        if ($user) {
            // return Auth::user();
            $pass= Auth::user()->password;
            if(Hash::check('12345', $pass)){
                $email = Crypt::encrypt($email);
                return redirect()->route('init_password', ['email' => $email]);
            }else {
                Session::flash('succes','Succès. Vous êtes connecté');
                 return redirect('dashbordAdmin');
            }
        }else{
            Session::flash('error','Echec. Email ou Mot de Passe incorrecte');
            return  redirect()->back();
        }
    }

    public function example()
    {
        return view('exemple');
    }

    public function init_password()
    {
       return view('dashbord.initpassword');
    }

    public function confirme_password(REQUEST $request)
    {

        // return $request;
        $email = Auth::user()->email;
        $this->validate($request, [
            'password'              => 'required|confirmed',
            'password_confirmation' => 'required'
        ],[
            'confirmed'=> "Les mots de passe ne correspondent pas",
            'required'=>"Les champs sont obligatoires"
        ]);
        
        $user = User::where('email',$email)
                    ->update(['password'=>bcrypt(request('password'))]);


        Auth::logout();
        return redirect('/');
        
    }






    public function view_add_user()
    {
        return view('dashbord.adduser');
    }


    public function add_user(REQUEST $request)
    {
        $data = $request['data'];


        // $errors =$request->$validate([
        //     'nom_user'=>'required',
        //     'email'=>'email|unique:users',
        //     'pseudo'=>'unique:users'
        // ],[
        //     'unique'=>'Cet utilisateur existe deja'
        // ]);

        // if ($validate->fails()) {
        //     $message = 'Cet utilisateur existe deja';
        //    return response()->json($validate);
        // }

        $user = User::create([
            'nom_user'=>$request['nom_user'],
            'email'=>$request['email'],
            'password'=>bcrypt('12345'),
            'prenom_user'=>$request['prenom_user'],
            'adresse_user'=>$request['nom_user'],
            'telephone_user'=>$request['tel_user'],
            'pseudo'=>$request['pseudo']
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
        // $data = User_analyse::find(23)->nature_analyse;
        // $data = User_analyse::find(23)->user;
        $data = User_analyse::with('user')
                            ->where('user_id',35)
                            ->with('nature_analyse')
                            ->get(['nature_analyse_id','user_id']);
        return $data;
    }


    public function user_connecte()
    {
       $user = \Auth::user()->id;
    
        return $user;
    }


    public function getUser()
    {
        return Auth::user();
    }
}
