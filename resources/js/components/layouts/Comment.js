import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Children from "./Children";
import { useSelector, useDispatch } from "react-redux";

export default function Comment({ comment }) {
    const value = useSelector(state => state.commentReducer.responseForm)
    const dispatch = useDispatch();
    function showReplyForm() {
        dispatch({type:"TOGGLE_RESPONSE_FORM"});
    }
   
    return (
        <li className="single_comment_area">
            {/* <!-- Comment Content --> */}
            <div className="comment-content d-flex">
                {/* <!-- Comment Author --> */}
                <div className="comment-author">
                    <img src="img/bg-img/53.jpg" alt="author" />
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
                        <button
                            onClick={() => showReplyForm()}
                            className="reply"
                        >
                            Reply
                        </button>
                    </div>
                </div>
               
            </div>
            {value ? <CommentForm comment={comment.id} text='Response' /> : <></>}
            
            {
                comment.response.length > 0
                ?comment.response.map(res => <Children key={res.id} comment={res}/>)
                :<></>
            }
        </li>
    );
}
