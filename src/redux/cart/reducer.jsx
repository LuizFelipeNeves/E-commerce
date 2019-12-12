const initialState = {
    hidden: true
}

const useReducer = (state = initialState, action) => {
    const actionstype = {
        'TOGGLE_CART_HIDDEN': {
            ...state,
            hidden: !state.hidden

        }
    }
    return actionstype[action.type] || state
}

export default useReducer