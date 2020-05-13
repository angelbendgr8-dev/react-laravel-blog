<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Post;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/* these are the api route for the 
post model of the blog */
Route::get('/posts','PostApiController@index');
Route::get('posts/{post}','PostApiController@show');
Route::post('/posts','PostApiController@store');
Route::put('/posts/{post}','PostApiController@update');
Route::delete('/posts/{post}','PostApiController@delete');
/* 
Here is the api route for the 
comment model of the blog */
Route::get('/comments/{id}','CommentApiController@index');
Route::post('/comments','CommentApiController@store');

Route::put('/comments/{comment}','CommentApiController@update');
Route::delete('/comments/{comment}','CommentApiController@delete');
