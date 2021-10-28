<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Models\Ligne_analyse;
use App\Models\Nature_analyse;

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
       $data = Nature_analyse::all();
       return response()->json($data, 200);
    }


    public function analyse_categorie(REQUEST $request)
    {
      $data = Categorie::join('nature_analyses','categories.id','nature_analyses.categorie_id')
                        ->where('nature_analyses.id',$request['id'])
                        ->get(['nature_analyses.*','prix_unitaire','libelle_analyse','libelle_categorie','categorie_id']);

      return $data;
    }



}
