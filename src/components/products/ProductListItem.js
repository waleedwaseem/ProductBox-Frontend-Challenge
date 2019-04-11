import React from 'react';

const ProductListItem = (props) => {
	return <div className="col-md-4" key="props.index">
		<h3> {props.product.name} </h3>
		<img 
			height={100}
			src={props.product.img}
			alt={props.product.name}
			/>
		<div> ${props.product.price } </div>
		<p>
			<button onClick={() => props.addToCart(props.product)}> Add to Cart ({
					(props.cartItem && props.cartItem.quantity) || 0})</button>
			{props.cartItem
				? <button onClick={() => props.removeFromCart(props.cartItem)}> Remove </button>
				: null
			}
		</p>
	</div>
}

export default ProductListItem;