import React,{useEffect} from 'react'
import {Link} from 'react-router-dom';

export default function RelatedPosts({posts}) {

    useEffect(() => {
      
    }, )
    return (
        posts.map(post => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <div className="single-blog-post style-4 mb-30">
                    <div className="post-thumbnail">
                        <img src={post.post_img} alt="" />
                    </div>
                    <div className="post-content">
                    <Link to={{
                            pathname:`/read/${post.id}/${post.name}/${post.title}`,
                            readProps:{
                                id:post.id,
                                category: post.name,
                                name: post.title
                            }
                        }} className="post-title">{post.title}</Link>
                        <div className="post-meta d-flex">
                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}
