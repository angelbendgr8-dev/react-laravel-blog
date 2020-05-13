<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'name','email','comment','post_id',
    ];

    public function post()
    {
        return $this->belongsTo('App\Post');
    }
    public function responses()
    {
        return $this->hasMany('App\Response');
    }
}
