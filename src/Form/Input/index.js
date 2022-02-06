import { Title, Content } from '../Select/styled';
// import { useState } from 'react';

const Input = ({ title, type, name, step, min, placeholder, required, readOnly, value, onChange }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content
				as='input'
				className='form__input'
				type={type}
				name={name}
				step={step}
				min={min}
				placeholder={placeholder}
				required={required}
				value={value}
				readOnly={readOnly}
				onChange={onChange}
			/>
		</label>
	);
};

export default Input;
