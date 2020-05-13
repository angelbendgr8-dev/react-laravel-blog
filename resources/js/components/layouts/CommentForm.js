import React, { Component } from "react";
import {connect} from "react-redux";
import { addResponse } from "../../redux/actions/commentAction";


class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state ={
            email : '',
            name : '',
            comment : '',
        }
        this.nameChanged = this.nameChanged.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        this.commentChanged = this.commentChanged.bind(this);
        this.commentSubmitted = this.commentSubmitted.bind(this);
    }
    nameChanged(e){
        this.setState({
            name:e.target.value
        })
    }

    emailChanged(e){
        this.setState({
            email: e.target.value
        })
    }

    commentChanged(e){
        this.setState({
            comment: e.target.value
        })
    }

    

    commentSubmitted(e){
        e.preventDefault();
        let data = {}
        if(this.props.comment){
             data = {
                comment_id: this.props.comment,
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                type: 'response'
            }
            
            this.props.addResponse(data);
            this.props.closeResponseForm();
        }else{
              data = {
                post_id: this.props.post_id,
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                type: 'comment'
            }
            this.props.newCommentAdded(data);
        }
        
      
       this.setState({
            name:"",
            email:"",
            comment:''
        });
        window.scroll(50,50);
    }

    render() {
        console.log(this.props.comment)
        return (
            <div className="post-a-comment-area bg-white mb-30 p-30 box-shadow clearfix">
                {/* <!-- Section Title --> */}
                <div className="section-heading">
                    <h5>LEAVE A REPLY</h5>
                </div>

                {/* <!-- Reply Form --> */}
                <div className="contact-form-area">
                    <form onSubmit={this.commentSubmitted} method="post">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value = {this.state.name}
                                    onChange = {this.nameChanged}
                                    placeholder="Your Name*"
                                    required
                                />
                            </div>
                            <div className="col-12 col-lg-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name='email'
                                    value = {this.state.email}
                                    onChange = {this.emailChanged}
                                    placeholder="Your Email*"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <textarea
                                    name="comment"
                                    className="form-control"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    value = {this.state.comment}
                                    onChange = {this.commentChanged}
                                    placeholder="Message*"
                                    required
                                ></textarea>
                            </div>
                            <div className="col-12">
                                <button
                                    className="btn btn-primary mag-btn mt-30"
                                    type="submit"
                                >
                                    Submit {this.props.text}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    addResponse:data=>dispatch(addResponse(data)),
    // closeResponseForm: ()=>dispatch({type:TOGGLE_RESPONSE_FORM})
});

export default connect(null, mapDispatchToProps)( CommentForm)
