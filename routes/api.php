<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ResultatController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ConnexionController;

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

//Les 5 derniers analyse
Route::get('recap_analyse',[AnalyseController::class,'recap_des_analyse']);

//Update analyse
Route::post('update_analyse',[AnalyseController::class,'update_analyse']);


//Supprimer une analyse
Route::post('suppanalyse',[AnalyseController::class,'supp_analyse']);

//Mettre a jour le statut

Route::post('mise_a_jour',[AnalyseController::class,'mise_a_analyse']);










//Ajouter un patient 

Route::post('ajouter_patient',[PatientController::class,'ajouter_patient']);

//Recuperer un patient specifique par recherche 
Route::post('recupere_un_patient', [PatientController::class,'recupere_un_patient']);


//Ajouter un utlisateur 
Route::post('add_user',[ConnexionController::class,'add_user']);

################################RESULTATS
//analyse, patient , nature_analyse 

Route::post('analyse_patient_resultat', [ResultatController::class,'liste_analyse']);


#############################################
//Recuperer analyse utilisateur 
Route::get('init_user_analyse',[ConnexionController::class,'init']);



###############################################################
//Ajouter des analyses
Route::post('add_hemostase',[ResultatController::class,'add_hemostase']);

//Ajouter Immuno
Route::post('add_immuno',[ResultatController::class,'add_immuno']);

//Ajouter une tyrodienne
Route::post('add_tyrod',[ResultatController::class,'add_tyrod']);
//Ajouter un groupe 
Route::post('add_groupe',[ResultatController::class,'add_groupe']);

//Ajouter Rub
Route::post('add_rub',[ResultatController::class,'add_rub']);



