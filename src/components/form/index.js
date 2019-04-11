import React from 'react';
import { Field, reduxForm } from 'redux-form';

function AddItemForm(props) {
	const { handleSubmit } = props;
	return <div>
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<Field name="name" className="form-control" component="input" type="text" />
			</div>
			<div className="form-group">
				<label htmlFor="price">Price</label>
				<Field name="price" className="form-control" component="input" type="number" />
			</div>
			<div className="form-group">
				<label htmlFor="image">Image</label>
				<Field name="image" className="form-control" component="input" type="text" />
			</div>
			<div>
				<button type="submit" className="btn btn-primary"> Submit </button>
			</div>
		</form>
	</div>
}

let Form = reduxForm({
	form: 'addNew'
})(AddItemForm)

export default Form;