export const addItemToCart = (cartItems, cartItemToAdd) => {
	if (cartItemToAdd) {
		const existingCartItem = cartItems.find(
			(cartItem) => cartItem.id === cartItemToAdd.id
		)
		return existingCartItem
			? cartItems.map((cartItem) =>
					cartItem.id === cartItemToAdd.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
			  )
			: [...cartItems, { ...cartItemToAdd, quantity: 1 }]
	}
	return cartItems
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	if (cartItemToRemove) {
		const existingCartItem = cartItems.find(
			(cartItem) => cartItem.id === cartItemToRemove.id
		)

		if (existingCartItem) {
			return existingCartItem.quantity > 1
				? cartItems.map((cartItem) =>
						cartItem.id === cartItemToRemove.id
							? { ...cartItem, quantity: cartItem.quantity - 1 }
							: cartItem
				  )
				: cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
		}
	}
	return cartItems
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
	return cartItemToClear
		? cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
		: cartItems
}
