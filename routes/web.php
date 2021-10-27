<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\dashbord\DashbordController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\ConnexionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('ad', function () {
   App\Models\User::create([
       'email' => 'admin@gmail.com',
       'password' => bcrypt('12345678'),
       'nom_user' => 'Admin Pierre',
   ]);
});

################################################################
//Connexion
Route::get('/',[ConnexionController::class,'index']);
//Se connecter
Route::post('login',[ConnexionController::class,'login']);

#######################################################
Route::get('dashbordAdmin', [DashbordController::class,'index']);



####################################################################
//Patient
Route::get('ajouterUnPatient', [PatientController::class,'index']);
//Liste des patients
Route::get('listeDesPatients', [PatientController::class,'liste']);


###################################################################

//Categorie

Route::get('ajouterunecategorie', [CategorieController::class,'index']);
//Liste
Route::get('listecategorie',[CategorieController::class,'liste']);


#######################################################################
//Analyse 
Route::get('ajouteruneanalyse',[AnalyseController::class,'index']);

Route::get('listeanalyse', [AnalyseController::class,'liste']);
