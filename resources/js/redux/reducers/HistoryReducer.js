const initialState = {
    history:[

    ]
}

export const types = {
    ADD_HISTORY: "ADD_HISTORY",
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_HISTORY:
        return { ...state, ...payload }

    default:
        return state
    }
}
