<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function index()
    {
        return view('patient.index');
    }

    public function liste()
    {
        return view('patient.liste');
    }


    //Ajouter un patient 

    public function ajouter_patient(REQUEST $request){

        // return $request;

        $data = Patient::create([
            'nom_patient'=>request('nom'),
            'prenom_patient'=>request('prenom'),
            'age_patient'=>request('age'),
            'telephone_patient'=>request('telephone'),
            'nom_accompagnant_patient'=>request('nom'),
            'telephone_accompagnant_patient'=>request('telAccompagnant'),
            'observation'=>request('observation'),
            'email_patient'=>'patient@gmail.com'
        ]);
        return response()->json($data, 200);
    }


}
