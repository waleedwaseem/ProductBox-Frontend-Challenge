import React from 'react';
import ProductListings from '../components/products/ProductListings';

const Home = (props) => {
	return (
		<div className="jumbotron">
			<ProductListings />
		</div>
	)
}

export default Home;