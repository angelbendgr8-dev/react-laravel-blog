<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Mews\Purifier\Facades\Purifier;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $posts = Post::latest()->get();
        
        $type = "All";
       
        
        return view('multiauth::admin.posts',compact('posts','type'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('multiauth::admin.add_post');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(),[
            'title' => ['required'],
            'category' => ['required'],
            'content' => ['required'],
            'post_img' => ['required'],
            
        ])->validate();

        if($request->hasfile('post_img')){
            
            $img_name = $request->post_img->getClientOriginalName();
            
            $request->post_img->storeAs('public/pictures',$img_name);
           
        }

        if(\Request::is('admin/*')){
            $uploader = 'admin';
        }else{
            $uploader = 'user';
        }

        Post::create([
            'title' => $request->title,
            'user_id' =>Auth::id(),
            'category_id' => $request->category,
            'content' => Purifier::clean($request->content),
            'post_img' => $img_name,
            'post_link' => $request->src_link,
            'uploader' => $uploader,
        ]);

        return redirect(route('admin.all.post'))->with('message','Post Added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post = Post::findOrFail($id);
        return view('multiauth::admin.edit_post',compact('post'));
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
        $post = Post::findOrFail($id);

        Validator::make($request->all(),[
            'title' => ['required'],
            'category' => ['required'],
            'content' => ['required'],
            
        ])->validate();

        

        if(\Request::is('admin/*')){
            $uploader = 'admin';
        }else{
            $uploader = 'user';
        }

        
            $post->title = $request->title;
            $post->user_id =Auth::id();
            $post->category_id = $request->category;
            $post->content = Purifier::clean($request->content);
            $post->post_link = $request->src_link;
            $post->uploader = $uploader;
            $post->updated_at = Carbon::now();
            $post->save();
        

        return redirect(route('admin.all.post'))->with('message','Post Updated successfully');
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

    /**
     * Filter Post By Category in the Admin 
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function filterPost($id)
    {
        $posts = Post::whereCategoryId($id)->latest()->get();
        
        $type = Category::whereId($id)->select('name')->first()->name;
       
        
        return view('multiauth::admin.posts',compact('posts','type'));
    }
}
