<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable =[
        'nom_patient',
        'prenom_patient',
        'age_patient',
        'telephone_patient',
        'nom_accompagnant_patient',
        'telephone_accompagnant_patient',
        'observation',
        'email_patient'
    ];
}
