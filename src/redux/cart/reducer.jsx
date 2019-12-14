import { addItemToCart } from './utils'

const initialState = {
	hidden: true,
	cartItems: []
}

const useReducer = (state = initialState, action) => {
	const actionstype = {
		TOGGLE_CART_HIDDEN: {
			...state,
			hidden: !state.hidden
		},
		ADD_ITEM: {
			...state,
			cartItems: addItemToCart(state.cartItems, action.payload)
		}
	}
	return actionstype[action.type] || state
}

export default useReducer
