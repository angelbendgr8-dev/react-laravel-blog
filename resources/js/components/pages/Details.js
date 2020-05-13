import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../redux/actions/postActions";
import PostDetails from "./PostDetails";
import RelatedPosts from "./RelatedPosts";
import Sidebar from "../layouts/Sidebar";
import CommentForm from "../layouts/CommentForm";
import { addComment } from "../../redux/actions/commentAction";
import { fetchComment } from "../../redux/actions/commentAction";
import CommentArea from "../layouts/CommentArea";
import { withRouter } from "react-router-dom";
import Loading from "../layouts/Loading";

class Details extends Component {
    constructor(props) {
        super(props);
        this.addNewComment = this.addNewComment.bind(this);
        
    }

    // onBackButtonEvent= (e)=>{
    //     // e.preventDefault();
    //     // console.log('hello');
    // }
    componentDidMount() {
       
        this.props.fetchPost(this.props.location.readProps.id);
        this.props.fetchComment(this.props.location.readProps.id);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (
    //         nextProps.location.readProps.id !== this.props.location.readProps.id
    //     ) {
    //         // console.log("hello");
    //         return true;
    //     } else{

    //     }
    // }
    componentDidUpdate(prevProps) {
        if (
            
            this.props.location.readProps.id !== prevProps.location.readProps.id
        ) {
            
            this.props.fetchPost(this.props.location.readProps.id);
            this.props.fetchComment(this.props.location.readProps.id);
            
            window.scrollTo(0, 0);
        }else{
           
        }
        
    }

    addNewComment(data){
       this.props.addComment(data);
       
    }

    render() {
        
        return (
            <section className="post-details-area mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-8">
                            {this.props.current ? (
                                <PostDetails post={this.props.current.post} />
                            ) : (
                                <Loading text='fetching Post'/>
                            )}
                            {/* <!-- Related Post Area --> */}
                            <div className="related-post-area bg-white mb-30 px-30 pt-30 box-shadow">
                                {/* <!-- Section Title --> */}
                                <div className="section-heading">
                                    <h5>Related Post</h5>
                                </div>

                                <div className="row">
                                    {/* <!-- Single Blog Post --> */}

                                    {this.props.current ? (
                                        <RelatedPosts
                                            posts={this.props.current.related}
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>

                            {/* <!-- Comment Area Start --> */}
                            <CommentArea />
                            {/* <!-- Post A Comment Area --> */}
                            <CommentForm text="Comment"
                                        post_id={this.props.location.readProps.id} 
                                        newCommentAdded={this.addNewComment}/>
                        </div>

                        <Sidebar />
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    current: state.postReducers.current,
    comments: state.commentReducer.comments
});

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        addComment: data =>dispatch(addComment(data)),
        fetchComment:id => dispatch(fetchComment(id))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Details));
