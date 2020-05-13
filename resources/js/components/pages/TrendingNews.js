import React from 'react'
import {Link} from 'react-router-dom'

export default function TrendingNews({post}) {
    return (
        <div  className="single-trending-post">
            <img src={post.post_img} className="img-fluid" alt="" />
            <div className="post-content">
                <a href="#" className="post-cata">
                    {post.name}
                </a>
                <Link to={{
                    pathname:`/read/${post.id}/${post.name}/${post.title}`,
                    readProps:{
                        id:post.id,
                        category: post.name,
                        name: post.title
                    }
                }} className="post-title">{post.title}</Link>
            </div>
        </div>
    )
}
