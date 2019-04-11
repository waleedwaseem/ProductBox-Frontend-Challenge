import React, {Component} from 'react';
import ProductListItem from './ProductListItem';
import { connect } from 'react-redux';

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
		const { products } = this.props;
		return <div className="row">
		{
			products.map(product => 
				<ProductListItem 
					key={product.id} 
					product={product}
					 />
			)
		}
		</div>
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadProducts: (products) => {
			dispatch({ type: 'LOAD', payload: products })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListings);