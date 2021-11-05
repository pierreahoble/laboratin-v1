<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Analyse;
use App\Models\Patient;
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

    //recuperer les cinq derniers analyse

    public function recap_des_analyse()
    {
      // $data=Ligne_analyse::join('nature_analyses','ligne_analyses.nature_analyse_id','nature_analyses.id')
      //                     ->join('patients','ligne_analyses.patient_id','patients.id')
      //                     ->join('analyses','ligne_analyses.analyse_id','analyses.id')
      //                     // ->where('ligne_analyses.patient_id', '=','analyses.patient_id')
      //                     ->get();

      $data = Patient::join('ligne_analyses','ligne_analyses.patient_id','patients.id')
                      ->join('nature_analyses','nature_analyses.id','ligne_analyses.nature_analyse_id')
                      ->where('patients.id',6)
                      ->whereDate('ligne_analyses.created_at', date('Y-m-d'))
                      ->take(2)
                      ->get();


       return response()->json($data, 200);
    }


    //Modifier une anlyses

    public function update_analyse(REQUEST $request)
    {


      $id =   $id = Analyse::latest('id')->first()->id;
      $code = $this->code_id($id);
      $data = $request['data'];
      $success = 'SUCCESS';
      $id_analyse = $request['analyse_id'];
      
      //Suppression des analyses a mettre a jour 
      $analyse_old = Analyse::find($id_analyse)->ligne_analyse()->delete();
      $supp_analyse = Analyse::find($id_analyse)->delete();


      $analyse = Analyse::create([
        'code'=>$code,
        'patient_id'=>request('patient_id')	,
        'montant'=>request('montant')	,
      ]);
      
      foreach ($data as $key => $value) {
        $analyse_new = Ligne_analyse::create([
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





    //Persistance des donnes analyse
    public function add_analyse(REQUEST  $request)
    {
      //  $id =  Analyse::latest('id')->first()->id;
      // $code = $this->code_id($id);
       $success='SUCCES';

       $data = $request['data'];
      //  code	patient_id	montant	
      $analyse = Analyse::create([
        'code'=> '56789',
        'patient_id'=>request('patient_id')	,
        'montant'=>request('montant')	,
      ]);

      $id_analyse = $analyse->id;

       foreach ($data as $key=> $value) {
          
           $data_ligne = Ligne_analyse::create([
             'patient_id'=>$request['patient_id'],
            'analyse_id'=> $id_analyse,
             'nature_analyse_id'=>$value['id'],
             'prix_unitaire'=>$value['prix_unitaire'],
             'quantite'=>1,
             'montant'=>$request['montant']
           ]);
       }
       $data =['success'=>'SUCCESS', 'id_analyse'=>$id_analyse];
       return response()->json($data, 200);
    }


    //Supp analyse

    public function supp_analyse(REQUEST $request)
    {
     $success = 'SUCCESS';
     $data = $request['data'];
     $id_analyse = $request['analyse_id'];
     $analyse_old = Analyse::find($id_analyse)->ligne_analyse()->delete();
     $supp_analyse = Analyse::find($id_analyse)->delete();
    
     return response()->json($success, 200);
  }



  public function mise_a_analyse(REQUEST $request)
  {
    $data = request('data');

    $success = 'SUCCESS';

    foreach ($data as $key => $value) {
     $tabAnalyse = Ligne_analyse::whereDate('created_at',date('Y-m-d'))
                                  ->where('patient_id',request('patient_id'))
                                  ->where('montant',request('montant'))
                                  ->where('nature_analyse_id',$value['id'])
                                  ->update(['statut'=>1]) ;

    }

    return response()->json($success, 200);



  }




  //fonction pour creeer un code
  public function code_id($id)
  {
    $id==null?$id=1:'';
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
