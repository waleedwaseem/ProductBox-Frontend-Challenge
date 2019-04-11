import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'This field is required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <div className="invalid-feedback" style={{display: 'block'}}>{error}</div>) || (warning && <span>{warning}</span>))}
  </div>
)

function AddItemForm(props) {
	const { handleSubmit, pristine, reset, submitting } = props
	return <div>
		<form onSubmit={handleSubmit}>
				<Field 
					name="name"
					component={renderField} 
					type="text"
					validate={required}
					label="Name" />
				<Field 
					name="price"
					component={renderField} 
					type="number"
					validate={required}
					label="Price" />
				<Field 
					name="image"
					component={renderField} 
					type="text"
					validate={required}
					label="Image" />
			<div>
				<button type="submit" className="btn btn-primary"> Submit </button>{' '}
				<button type="button" className="btn btn-danger" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
			</div>
		</form>
	</div>
}

let Form = reduxForm({
	form: 'addNew'
})(AddItemForm)

export default Form;