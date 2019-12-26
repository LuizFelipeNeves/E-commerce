export const toggleCartHiddenAction = () => ({
	type: 'TOGGLE_CART_HIDDEN'
})

export const addItemAction = (item) => ({
	type: 'ADD_ITEM',
	payload: item
})

export const removeItemAction = (item) => ({
	type: 'REMOVE_ITEM',
	payload: item
})

export const clearItemAction = (item) => ({
	type: 'CLEAR_ITEM',
	payload: item
})
