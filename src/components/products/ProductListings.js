import React, {Component} from 'react';
import ProductListItem from './ProductListItem';
import { connect } from 'react-redux';

import {itemInCart} from '../../helpers';
import fetchApi from './../../modules/fetch-api';

class ProductListings extends Component {
	componentDidMount() {
		const { loadProducts } = this.props;
		fetchApi('get', 'http://localhost:4000/items')
			.then(json => {
				loadProducts(json)
			})
	}
	render() {
		const { products, addToCart, removeFromCart, cart } = this.props;
		return <div className="row">
		{
			products.map(product => 
				<ProductListItem 
					key={product.id} 
					product={product}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
					cartItem={itemInCart(cart, product)}
					 />
			)
		}
		</div>
	}
}

function mapStateToProps(state) {
	return {
		products: state.products,
		cart: state.cart,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadProducts: (products) => {
			dispatch({ type: 'LOAD', payload: products })
		},
		addToCart: (item) => {
			dispatch({ type: 'ADD', payload: item })
		},
		removeFromCart: (item) => {
			dispatch({ type: 'REMOVE', payload: item})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListings);