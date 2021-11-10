<?php

namespace App\Models;

use App\Models\Analyse;
use App\Models\Nature_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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


   
    public function analyse()
    {
        return $this->belongsTo(Analyse::class, 'analyse_id', 'id');
    }

    



   
    


}
