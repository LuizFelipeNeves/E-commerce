export const addItemToCart = (cartItems, cartItemToAdd) => {
	if (cartItemToAdd) {
		const existingCartItem = cartItems.find(
			(cartItem) => cartItem.id === cartItemToAdd.id
		)
		return existingCartItem ? 
			cartItems.map((cartItem) =>
				cartItem.id === cartItemToAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
			): [...cartItems, { ...cartItemToAdd, quantity: 1 }]
	}
	return cartItems
}
