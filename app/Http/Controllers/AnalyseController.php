<?php

namespace App\Http\Controllers;

use App\Models\Analyse;
use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Models\Ligne_analyse;
use App\Models\Nature_analyse;
use Illuminate\Support\Facades\DB;

class AnalyseController extends Controller
{
    public function index()
    {
       return view('analyse.index');
    }

    public function liste()
    {
       return view('analyse.liste');
    }

    //Nouvelle analyse 
    public function nouvelle_analyse()
    {
      return view('dashbord.analysepatient');
    }



    //Add analyse 
    public function ajouter_analyse(REQUEST $request)
    {
      
      //  return $request;

      $data= Nature_analyse::create([
         'categorie_id'=>request('categorieId'),
         'libelle_analyse'=>request('libelle'),
         'prix_unitaire'=>request('prixUnitaire')
       ]);

       return response()->json($data, 200);
    }


    public function liste_analyse()
    {
      // $data = Nature_analyse::all();
       $data=Nature_analyse::join('categories','nature_analyses.categorie_id','categories.id')
                           // ->where('categories.id','=','nature_analyses.categorie_id')
                           ->get(['nature_analyses.*','categories.libelle_categorie']);
       return response()->json($data, 200);
    }


    public function analyse_categorie(REQUEST $request)
    {
      $data = Categorie::join('nature_analyses','categories.id','nature_analyses.categorie_id')
                        ->where('nature_analyses.id','categories.id')
                        ->get(['nature_analyses.*','libelle_categorie','categorie_id']);

      return response()->json($data, 200);
    }

    //Reçu du patient 

    public function recu_patient()
    {
      return view('dashbord.recu');
    }











    //Persistance des donnes analyse
    public function add_analyse(REQUEST  $request)
    {

       $success='SUCCES';

     
       $data = $request['data'];
      //  return $data;
      

       foreach ($data as $key=> $value) {

         $analyse = Analyse::create([
            'code'=>$request['montant'] + $request['patient_id'],
            'patient_id'=>$request['patient_id'],
            'montant'=>$request['montant']
         ]);
          
           $data_ligne = Ligne_analyse::create([
             'patient_id'=>$request['patient_id'],
             'analyse_id'=>$analyse->id,
             'nature_analyse_id'=>$value['id'],
             'prix_unitaire'=>$value['prix_unitaire'],
             'quantite'=>1,
             'montant'=>$request['montant']
           ]);
       }
       return response()->json($success, 200);
    }



}
