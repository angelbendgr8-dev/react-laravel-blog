
const initialState = {
    posts :[],
    current:[],
}
const  types = {
    FETCH_POSTS_SUCCEDED:"FETCH_POSTS_SUCCEDED",
    FETCH_POST:"FETCH_POST",
    FETCH_POST_SUCCEDED:"FETCH_POST_SUCCEDED",
    
    
}
export const postReducers = (state = initialState, action) => {
    
  switch (action.type) {

  case types.FETCH_POSTS_SUCCEDED:
    
    let posts = action.payload;
    
    return { 
         posts: posts,
    }
   
    break;
  case types.FETCH_POST_SUCCEDED:
    return {
      posts:state.posts,
      current: action.payload
    }

    break;
  default:
    return state
  }
};
