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
			<button> Add to Cart </button>
		</p>
	</div>
}

export default ProductListItem;