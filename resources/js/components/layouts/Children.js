import React from "react";

export default function Children({ comment }) {
    return (
        <div>
            <ol className="children">
                <li className="single_comment_area">
                    {/* <!-- Comment Content --> */}
                    <div className="comment-content d-flex">
                        {/* <!-- Comment Author --> */}
                        <div className="comment-author">
                            <img src="img/bg-img/54.jpg" alt="author" />
                        </div>
                        {/* <!-- Comment Meta --> */}
                        <div className="comment-meta">
                            <a href="#" className="comment-date">
                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                }).format(new Date(comment.created_at))}
                            </a>
                            <h6>{comment.name}</h6>
                            <p>{comment.comment}</p>
                            <div className="d-flex align-items-center">
                                <a href="#" className="like">
                                    like
                                </a>
                                <a href="#" className="reply">
                                    Dislike
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    );
}
