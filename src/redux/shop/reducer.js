const initialState = {
	collections: null
}

const useReducer = (state = initialState, action) => {
	const actionstype = {
		UPDATE_COLLECTIONS: {
			...state,
			collections: action.payload
		}
	}
	return actionstype[action.type] || state
}

export default useReducer
