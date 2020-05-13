import React from 'react'


export default function PostDetails({ post }) {
    function createMarkUp(){
        return {__html: post.content}
    }

    return (

        <div className="post-details-content bg-white mb-30 p-30 box-shadow">
            <div className="blog-thumb mb-30">
                <img src={post.post_img} alt="" />
            </div>
            <div className="blog-content">
                <div className="post-meta">
                    <a href="#">MAY 8, 2018</a>
                    <a href="archive.html">{post.name}</a>
                </div>
                <h4 className="post-title">{post.title}</h4>
                {/* <!-- Post Meta --> */}
                <div className="post-meta-2">
                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                </div>

                <div dangerouslySetInnerHTML ={{__html:post.content}}/>
                {/* <!-- Like Dislike Share --> */}
                <div className="like-dislike-share my-5">
                    <h4 className="share">240<span>Share</span></h4>
                    <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i> Share on Facebook</a>
                    <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i> Share on Twitter</a>
                </div>

                {/* <!-- Post Author --> */}
                <div className="post-author d-flex align-items-center">
                    <div className="post-author-thumb">
                        <img src="img/bg-img/52.jpg" alt="" />
                    </div>
                    <div className="post-author-desc pl-4">
                        <a href="#" className="author-name">Alan Shaerer</a>
                        <p>Duis tincidunt turpis sodales, tincidunt nisi et, auctor nisi. Curabitur vulputate sapien eu metus ultricies fermentum nec vel augue. Maecenas eget lacinia est.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
