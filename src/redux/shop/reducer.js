import SHOP_DATA from './data'

const initialState = {
	colletions: SHOP_DATA
}

const useReducer = (state = initialState, action) => {
	const actionstype = {}
	return actionstype[action.type] || state
}

export default useReducer
