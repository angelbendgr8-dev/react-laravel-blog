

import types from '../reducers/HistoryReducer';

export const addHistory  = (payload) => {
    console.log(payload)
    return{
        type: 'ADD_HISTORY',
        payload
    }

}

export const removeHistory = (payload) => ({
    type: 'REMOVE_HISTORY',
    payload
})

export const clearHistory = () => ({
  type: 'CLEAR_HISTORY',
  
})


