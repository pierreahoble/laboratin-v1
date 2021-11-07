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


   
    public function nature_analyse()
    {
        return $this->belongsTo(Nature_analyse::class, 'nature_analyse_id', 'id');
    }


    /**
     * Get the user that owns the User_analyse
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }



}
