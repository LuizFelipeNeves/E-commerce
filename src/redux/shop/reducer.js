import SHOP_DATA from './data'

const initialState = {
	collections: SHOP_DATA
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
