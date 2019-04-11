import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './../pages/Home';
import Cart from './../pages/Cart';
import CheckoutPage from './../pages/CheckoutPage';
import AddItemPage from './../pages/AddItemPage';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/cart" component={Cart} />
		<Route exact path="/checkout" component={CheckoutPage} />
		<Route exact path="/add-item" component={AddItemPage} />
	</Switch>
)

export default Router;