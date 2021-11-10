<?php

namespace App\Http\Controllers;

use App\Models\Analyse;
use App\Models\Patient;
use App\Models\Resultat;
use Illuminate\Http\Request;
use App\Models\Ligne_analyse;
use App\Models\Nature_analyse;
use Illuminate\Support\Facades\DB;

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

    public function add_hemostase(REQUEST $request)
    {

        $resulats =Resultat::updateOrCreate(
            [
                'code'=>request(''),
                'analyse_id'=>request('analyse_id')
            ],

            [
                // 'code'=>request('code'),
                'tca'=>request('resultatTCA'),              
                'tcavpsa'=>request('patientTCASA'),              
                'tcavpso'=>request('patientTCASO'),            
                'tp'=>request('resultatTP'),            
                'tcvpsa'=>request('patientTPSA'),            
                'tcvpso'=>request('patientTPSO'),            
                'ts'=>request('resultatTS'),            
                'tsvpsa'=>request('patientTSSA'),            
                'tsvpso'=>request('patientTSSO'),            
                'inr'=>request('resultatINR'),            
                'inrvpsa'=>request('patientINRSA'),            
                'inrvpso'=>request('patientINRSO'),            
            ]
            ) ;


        return response()->json($resulats, 200);
    }


    public function add_immuno(REQUEST $request)
    {
        // return $request;

        $resulat = Resultat::updateOrCreate(
            [
                'code'=>request('code'),
                'analyse_id'=>request('analyse_id')
            ],
            [
                'aghbs'=>request('resultatAg'),                
                'aghbsKit'=>request('kitAg'),                
                'aghbsTech'=>request('techAg'),                
                'tpha'=>request('techAg'),                
                'tphaKit'=>request('kitTph'),                
                'tphaTech'=>request('techTph'),                
                'vdrl'=>request('resultatVdr'),                
                'vdrlKit'=>request('kitVdr'),                
                'vdrlTech'=>request('techVdr'),                   
            ]
        );

        return response()->json($resulat, 200);
    }


    public function add_tyrod(REQUEST $request)
    {
       

        $resulat = Resultat::updateOrCreate(
            [
                'code'=>request('code'),
                'analyse_id'=>request('analyse_id')
            ],
            [
                'fts'=>request('resultatFT3'),
                'ftu'=>request('resultatFT3'),
                'tsh'=>request('resultatFT3'),
                'vft3'=>request('valeurFT3'),
                'vft4'=>request('valeurFT4'),
                'vtsh'=>request('valeurTSH'),
            ]
        );

        return response()->json($resulat, 200);
    }

    public function add_groupe(REQUEST $request)
    {
       
        $resulat = Resultat::updateOrCreate(
            [
                'code'=>request('code'),
                'analyse_id'=>request('analyse_id')
            ],
            [
                'groupe'=>request('groupe'),
                'rhesus'=>request('rhesus'),
            ]
        );

        return response()->json($resulat, 200);
       
    }


    public function add_rub(REQUEST $request)
    {
       

        $resulat = Resultat::updateOrCreate(
            [
                'code'=>request('code'),
                'analyse_id'=>request('analyse_id')
            ],
            [
                'igm'=>request('igmT'),
                'igg'=>request('iggT'),
                'iggVt'=>request('doseT'),
                'igmR'=>request('igmR'),
                'iggR'=>request('iggR'),
                'iggVr'=>request('doseR'),
               
            ]
        );



       return response()->json($resulat, 200);
    }




    public function liste_resultat()
    {
       return view('dashbord.listeresultat');
    }

    public function liste_des_resultats()
    {

   
       

        $resulats = Analyse::with('nature_analyse')
                            ->get();
    

        // $resulats = Resultat::find(13)->analyse->nature_analyse;
        // $resulats = Resultat::with('nature_analyse')
        //                     ->get();
  

       return response()->json($resulats, 200);
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










