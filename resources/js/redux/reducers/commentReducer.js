
const initialState = {
    comments:[],
    responseForm: false,
}

export const  types = {
    ADD_COMMENT:"ADD_COMMENT", 
    FETCH_COMMENT_SUCCEDED:'FETCH_COMMENT_SUCCEDED',
    ADD_RESPONSE:'ADD_RESPONSE'

}

export const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    
    case types.FETCH_COMMENT_SUCCEDED:
        return {
            comments: payload,
            responseForm: state.responseForm,
        }
        break;
    case types.ADD_COMMENT:
        
        return {
            comments: [payload, ...state.comments]
        }
        break;
    case types.ADD_RESPONSE:
        
        return {
            comments: state.comments.map(comment=>{
                if(comment.id === payload.id){
                    return Object.assign({},comment,payload)
                }
                return comment;
            })
        }
        break;
    case 'TOGGLE_RESPONSE_FORM':
        return {
            comments: state.comments,
            responseForm:!state.responseForm,
        }
    default:
        return state;
    }
}

