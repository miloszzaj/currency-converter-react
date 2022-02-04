import { Title, ContentInput } from '../Select/styled';
// import { useState } from 'react';

const Input = ({ title, type, name, step, min, placeholder, required, value, onChange }) => {
	return (
		<label>
			<Title>{title}</Title>
			<ContentInput
				className='form__input'
				type={type}
				name={name}
				step={step}
				min={min}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
