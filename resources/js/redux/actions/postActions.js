import axios from 'axios'



const base_url = "http://blog1.test/api/posts"

export const  fetchPosts = () =>{
    
    return  dispatch =>{
        axios.get(base_url).then( resp=>{
            
            dispatch(fetchPostsSucceded(resp.data))
        }
        ).catch(e =>{
            console.log(e.data)
        })   
}
}
export const fetchPostsSucceded= (data)=>{
    
    return {
        type: "FETCH_POSTS_SUCCEDED",
        payload: data,
    }
}
export const fetchPostSucceded= (data)=>{
    // console.log(data)
    return {
        type: "FETCH_POST_SUCCEDED",
        payload: data,
    }
}

export const fetchPost = (id)=>{
    // console.log(id);
    return  dispatch => {
        axios.get(`${base_url}/${id}`).then(resp=>{
            // console.log(resp)
            dispatch(fetchPostSucceded(resp.data))
        })
    }
}
