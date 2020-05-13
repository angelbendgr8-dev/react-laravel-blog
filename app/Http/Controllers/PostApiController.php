<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = DB::table('posts')->join('categories','categories.id','posts.category_id')
                                    ->select('posts.*','categories.name')
                                    ->latest()->limit(6)->get();
        foreach ($posts as $post) {
            $post->post_img = asset('/storage/pictures')."/".$post->post_img;
        }
        return response()->json($posts,200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $post = Post::findOrFail($id);

        $related = DB::table('posts')->join('categories','posts.category_id','categories.id')
                                    ->where([['posts.category_id',$post->category_id],['posts.id','!=',$post->id]])
                                    ->select('posts.*','categories.name')
                                    ->get();
        $post->post_img = asset('/storage/pictures')."/".$post->post_img;

        foreach ($related as $item) {
            $item->post_img = asset('/storage/pictures')."/".$item->post_img;
        }

        return response()->json(['post'=>$post,'related'=>$related],200);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
