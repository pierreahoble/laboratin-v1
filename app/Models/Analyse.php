<?php

namespace App\Models;

use App\Models\Ligne_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Analyse extends Model
{
    use HasFactory;

    protected $fillable =[
        'code',
        'patient_id',
        'montant'
    ];


    
    public function ligne_analyse()
    {
        return $this->hasMany(Ligne_analyse::class, 'analyse_id', 'id');
    }
}
