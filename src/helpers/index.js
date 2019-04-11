// returns all items except the search item
const cartWithoutItem = (cart, item) => 
	cart.filter(
			cartItem => cartItem.id !== item.id
			)

// returns the first item which is matched 
export const itemInCart = (cart, item) => 
	cart.filter(cartItem => cartItem.id === item.id)[0]

// this function see if item doesn't exist then add 'quantity' property to it
// but if item already have 'quantity' property then just add 1 to it.
export const addToCart = (cart, item) => {
	const cartItem = itemInCart(cart, item)
	return cartItem === undefined
		? [...cartWithoutItem(cart, item), { ...item, quantity: 1}]
		: [...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1}]
}

// this function is similar to 'addToCart' function, it just remove all items or subtract 1 from it
export const removeFromCart = (cart, item) => {
	return item.quantity === 1
		? [...cartWithoutItem(cart, item)]
		: [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1}]
}