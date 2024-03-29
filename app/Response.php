<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    protected $fillable=[
        'name','email','comment','comment_id'
    ];

    public function comment()
    {
        return $this->belongsTo('App\Comment');
    }
}
