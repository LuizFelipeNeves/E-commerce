const initialState = {
    currentUser: null
}

const useReducer = (state = initialState, action) => {
    const actionstype = {
        'SET_CURRENT_USER': {
            ...state,
            currentUser: action.payload

        }
    }
    return actionstype[action] || state
}

export default useReducer