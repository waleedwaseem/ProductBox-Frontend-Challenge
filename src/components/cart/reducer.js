import {addToCart, removeFromCart} from '../../helpers';

const cartReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD':
			return addToCart(state, action.payload)

		case 'REMOVE': 
			return removeFromCart(state, action.payload)
			
		default:
			return state;	
	}
}

export default cartReducer;