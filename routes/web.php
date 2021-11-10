<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Controllers\AnalyseController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ResultatController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ConnexionController;
use App\Http\Controllers\dashbord\DashbordController;

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

Route::view('recubilan', 'index');
Route::view('hemostase', 'hemostase');

Route::get('ad', function () {
   App\Models\User::create([
       'email' => 'admin@gmail.com',
       'password' => bcrypt('12345678'),
       'nom_user' => 'Admin Pierre',
   ]);
});



Route::get('/exemple',[ConnexionController::class,'example']);

//Connexion
Route::get('/',[ConnexionController::class,'index']);

Route::post('login',[ConnexionController::class,'login']);

Route::get('init_password/{email}',[ConnexionController::class,'init_password'])->name('init_password');
Route::post('init_password',[ConnexionController::class,'confirme_password']);


######################################################################
#Middleware

Route::group(['middleware'=>'App\Http\Middleware\AuthMiddleware'],function () {
    
    ################################################################
    //Se connecter
    
    #######################################################
    Route::get('dashbordAdmin', [DashbordController::class,'index']);
    
    
    ####################################################
    //Ajouter un utilisateur 
    Route::get('ajouter_un_utlisateur',[ConnexionController::class,'view_add_user']);
    
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
    
    
    
    #######
    // Route::get('ajouteruneanalyse', [AnalyseController::class,'nouvelle_analyse']);
    
    ######Reçu du patient
    Route::get('recudupatient',[AnalyseController::class,'recu_patient']);
    
    ###########################################################
    //REsusltat 
    Route::get('resultat_analyse',[ResultatController::class,'index']);


    #######################################################################
    //Liste des resultats 
    Route::get('liste_resultat',[ResultatController::class,'liste_resultat']);



    
});        





