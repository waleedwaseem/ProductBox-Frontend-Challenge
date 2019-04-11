import React from 'react';
import { connect } from 'react-redux';

function Cart(props) {
	return <div>
		{props.cart.length > 0 
			?   <table className="table table-bordered">
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						props.cart.map(item => <tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.quantity}</td>
							<td>${item.price}</td>
							<td><button onClick={() => props.addToCart(item)}> + </button><button onClick={() => props.removeFromCart(item)}> - </button></td>
						</tr>)
					}
				</tbody>
				</table>
			: 'No item added to the cart'
	}
	</div>
}

function mapStateToProps(state) {
	return {
		cart: state.cart,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item})
		},
		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);