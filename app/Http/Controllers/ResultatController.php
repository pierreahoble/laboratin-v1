<?php

namespace App\Http\Controllers;

use App\Models\Analyse;
use App\Models\Patient;
use Illuminate\Http\Request;

class ResultatController extends Controller
{
    public function index()
    {
        return view('dashbord.resultat');
    }



    public function liste_analyse(REQUEST $request)
    {

    //    return $request['code'];
      
        $data = Analyse::where('code','LIKE','%'.$request['code'].'%')
                        ->with('patient')
                        // ->with('ligne_analyse')
                        // ->orderBy('created_at','desc')
                        ->get();

        // $data = Analyse::join('patients','analyses.patient_id','patients.id')
        //                 ->where('code','like','%'.$request['code'])->get() ;

        
        return $data;
    }





    public function code_id($id)
    {
       $taille = Str::length($id);
       if ($taille == 1) {
           return $id ='000'.$id;
       }
       if ($taille == 2) {
        return $id ='00'.$id;
       }

       if ($taille == 3 ) {
        return $id ='0'.$id;
       }

       return $id;
    }




}











// $data = Patient::find(1)->analyse->where('code','11501');
// Patient::find(1)->ligne_analyse;
// $data =Patient::with('analyse')->get();
// $data = Analyse::with('ligne_analyse')->get();