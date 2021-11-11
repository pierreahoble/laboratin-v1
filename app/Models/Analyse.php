<?php

namespace App\Models;

use App\Models\Patient;
use App\Models\Categorie;
use App\Models\Ligne_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Analyse extends Model
{
    use HasFactory;

    protected $fillable =[
        'code',
        'patient_id',
        'montant',
        'statut'
    ];


    
    
    
    
    public function resultat()
    {
        return $this->hasMany(Resultat::class, 'analyse_id', 'id');
    }
    
    
    
    public function ligne_analyse()
    {
        return $this->hasMany(Ligne_analyse::class, 'analyse_id', 'id');
    }


    
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id', 'id');
    }
    



    // public function nature_analyse() 
    // {
    // return $this->belongsToMany(Nature_analyse::class, 'ligne_analyses', 'analyse_id', 'nature_analyse_id');
    // }


    public function nature_analyse()
    {
        return $this->BelongsToMany(Nature_analyse::class,Ligne_analyse::class );
    }

    
    public function categorie()
    {
        return $this->belongsToMany(Categorie::class, Ligne_analyse::class);
    }


   


    
}
