<?php

namespace App\Http\Controllers;

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
}
