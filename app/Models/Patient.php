<?php

namespace App\Models;

use App\Models\Ligne_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'email_patient',
        'adresse'
    ];


    /**
     * Get the user that owns the Patient
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function analyse()
    {
        return $this->hasMany(Analyse::class,'patient_id','id');
    }
}
