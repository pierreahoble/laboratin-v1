<?php

namespace App\Models;

use App\Models\Analyse;
use App\Models\Patient;
use App\Models\Nature_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ligne_analyse extends Model
{
    use HasFactory;


    protected $fillable = [
        'patient_id',
        'analyse_id',
        'nature_analyse_id',
        'prix_unitaire',
        'quantite',
        'montant',
        'categorie_id'
    ];



   
    public function nature_analyse()
    {
        return $this->belongsTo(Nature_analyse::class, 'nature_analyse_id', 'id');
    }

    
    public function analyse()
    {
        return $this->belongsTo(Analyse::class, 'analyse_id', 'id');
    }

    
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'id');
    }



}
