import React, { Component } from "react";
import Comment from "./Comment";
import {connect} from "react-redux";

 class CommentArea extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    

    render() {
       
        return (
            <div className="comment_area clearfix bg-white mb-30 p-30 box-shadow">
                {/* <!-- Section Title --> */}
                <div className="section-heading">
                    <h5>COMMENTS</h5>
                </div>

                <ol>
                    {/* <!-- Single Comment Area --> */}
                   {
                       this.props.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                   }
                </ol>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
       comments: state.commentReducer.comments
});

export default connect(mapStateToProps)(CommentArea)