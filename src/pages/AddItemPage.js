import React from 'react';
import {NavLink} from 'react-router-dom';
import AddItemForm from '../components/form';
import fetchApi from '../modules/fetch-api';

function submitForm(values) {
	const {name, price, image } = values;

	fetchApi('post', 'http://localhost:4000/items', {
			name: name,
			price: price,
			img: image
		}).then(json => {
			if(json.errors) {
				alert('Something went wrong');
			}
			alert('Form submitted');
		})
}

const AddItemPage = (props) => {
	return <div>
		<h1>Put Items up for Sale</h1>
		<AddItemForm onSubmit={(values) => submitForm(values)} />
		<br />
		<p>
			<NavLink className="nav-link" to="/"> View items </NavLink>
		</p>
	</div>
}

export default AddItemPage;