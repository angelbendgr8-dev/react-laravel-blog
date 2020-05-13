<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title','user_id','category_id','post_img','content','post_link','uploader'
    ];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
