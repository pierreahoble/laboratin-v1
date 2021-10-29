<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ligne_analyse extends Model
{
    use HasFactory;


    protected $fillable = [
        'analyse_id',
        'nature_analyse_id',
        'prix_unitaire',
        'quantite',
        'montant',
        'patient_id	'
    ];
}
