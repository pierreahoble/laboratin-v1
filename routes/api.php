<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\CategorieController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Add new categorie
Route::post('ajouter_categorie',[CategorieController::class,'ajouter_categorie']);
//Liste des categories
Route::get('liste_categorie', [CategorieController::class,'liste_categorie']);


//Add new analyse categorie
Route::post('ajouter_analyse',[AnalyseController::class,'ajouter_analyse']);
//Liste des analyses
Route::get('liste_des_analyses',[AnalyseController::class,'liste_analyse']);
//Recuperer Les categories d'une analyse
Route::post('analyse_id_categorie',[AnalyseController::class,'analyse_categorie']);

//Persistance des donnes de l'analyse
Route::post('add_analyse_categorie',[AnalyseController::class,'add_analyse']);






//Ajouter un patient 

Route::post('ajouter_patient',[PatientController::class,'ajouter_patient']);

//Recuperer un patient specifique par recherche 
Route::post('recupere_un_patient', [PatientController::class,'recupere_un_patient']);

