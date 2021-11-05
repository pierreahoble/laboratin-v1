<?php

namespace App\Models;

use App\Models\Nature_analyse;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class user_analyse extends Model
{
    use HasFactory;

    protected $fillable=[
        'user_id',
        'nature_analyse_id'
    ];


   
    public function user(): HasOne
    {
        return $this->hasOne(Nature_analyse::class, 'nature_analyse_id', 'id');
    }



}
