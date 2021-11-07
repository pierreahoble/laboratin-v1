<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultat extends Model
{
    use HasFactory;

    protected $fillable =[
        'code',
        'analyse_id',               
        'groupe',
        'rhesus',
        'tca',
        'tp',
        'inr',
        'ts',
        'crp',
        'aghbs',
        'tpha',
        'vdrl',
        'fts',
        'ftu',
        'tsh',
        'igm',
        'igg',
        'vft3',
        'vft4',
        'vtsh',
        'igmR',
        'iggR',
        'iggVt',
        'iggVr',
        'aghbsKit',
        'aghbsTech',
        'tphaKit',
        'tphaTech',
        'vdrlKit',
        'vdrlTech',
        'tcavpsa',
        'tcavpso',
        'tcvpsa',
        'tcvpso',
        'inrvpsa',
        'inrvpso',
        'tsvpsa',
        'tsvpso'	
    ];



}
