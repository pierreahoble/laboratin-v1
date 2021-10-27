<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nature_analyse extends Model
{
    use HasFactory;


    protected $fillable = [
        'categorie_id',
        'libelle_analyse',
        'prix_unitaire'
    ];
}
