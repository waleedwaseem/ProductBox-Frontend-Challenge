import React from 'react';
import {NavLink} from 'react-router-dom';
import {getItemQuantityCount} from '../../helpers';

const Navigation = ({ cart }) => 
	<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		<ul className="navbar-nav mr-auto">
			<li>
				<NavLink className="nav-link" to="/add-item"> Put Items up for Sale </NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/"> Browse our Items! </NavLink>
			</li>
			<li>
				<NavLink className="nav-link" to="/checkout"> Checkout! </NavLink>
			</li>
    	</ul>
    	<ul className="pull-right nav navbar-nav">
		    <NavLink className="nav-link" to="/cart"> My Cart ({getItemQuantityCount(cart)})
			</NavLink>
		</ul>
    </nav>

export default Navigation;