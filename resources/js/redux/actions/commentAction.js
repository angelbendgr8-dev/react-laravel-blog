import axios from 'axios';
import {types} from '../reducers/commentReducer';


const base_url = "http://blog1.test/api/comments"


export const fetchComment = (id)=>{
    return dispatch => {
        axios.get(`${base_url}/${id}`).then(resp =>{
            dispatch(fetchCommentSucceded(resp.data))
        })
    }
}
export const fetchCommentSucceded = (data)=>{
    
    return {
        type: types.FETCH_COMMENT_SUCCEDED,
        payload: data
    }
}
export const addComment = (data) =>{
   
    return dispatch =>{
        axios.post(`${base_url}`,data).then(resp=>{
            dispatch(commentAddedSuccessfully(resp.data))
        })
    }
}
export const addResponse = (data) =>{
    
    return dispatch =>{
        axios.post(`${base_url}`,data).then(resp=>{
            dispatch(responseAddedSuccessfully(resp.data))
        })
    }
}

export const responseAddedSuccessfully = (data)=>{
    
    return {
        type: types.ADD_RESPONSE,
        payload: data
    }
}
export const commentAddedSuccessfully = (data)=>{
   
    return {
        type: types.ADD_COMMENT,
        payload: data
    }
}
