const initialState = {
    history:[

    ]
}

export const types = {
    ADD_HISTORY: "ADD_HISTORY",
    REMOVE_HISTORY: 'REMOVE_HISTORY',
    CLEAR_HISTORY: 'CLEAR_HISTORY',
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_HISTORY:
        return { history: [...state.history,payload] }
        break;
    case types.REMOVE_HISTORY:
        return {
            history: state.history.filter(item => item.id === payload)
        }
        break;
    case types.CLEAR_HISTORY:
        return{
            history: [],
        }
        break;
    default:
        return state
    }
}
