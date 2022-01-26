import './style.css';
// import { useState } from 'react';
const InputComponent = ({ title, type, name, step, min, placeholder, required }) => {
	return (
		<label>
			<span className='form__labelText'>{title}</span>
			<input
				className='form__input'
				type={type}
				name={name}
				step={step}
				min={min}
				placeholder={placeholder}
				required={required}
			/>
		</label>
	);
};

export default InputComponent;
