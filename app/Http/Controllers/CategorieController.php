<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    public function index()
    {
      return view('categorie.index');
    }


    public function liste()
    {
        return view('categorie.listecategorie');
    }

    //Ajouter une categorie
    public function ajouter_categorie(REQUEST $request)
    {
      // return  $request;
      $data= Categorie::create([
        'libelle_categorie'=>$request['libelle']
      ]);
      return response()->json($data, 200);
    }


    //liste des categories

    public function liste_categorie()
    {
      return $data = Categorie::all();

      return response()->json($data, 200);
    }
}
