<?php

namespace App\Models;

use App\Models\Categorie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Nature_analyse extends Model
{
    use HasFactory;


    protected $fillable = [
        'categorie_id',
        'libelle_analyse',
        'prix_unitaire'
    ];


    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'categorie_id', 'id');
    }   
}
