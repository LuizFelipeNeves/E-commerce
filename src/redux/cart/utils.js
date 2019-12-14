export const addItemToCart = (cartItems, cartItemtoAdd) => {
	const existingCartItem = cartItems.find(({ id }) => id === cartItemtoAdd.id)

	return existingCartItem
		? cartItems.map((cartItem) =>
				cartItem.id === cartItemtoAdd.id
					? { ...cartItem, quantity: cartItem.quantity + 1 }
					: cartItem
		  )
		: [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
}
