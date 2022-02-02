import './style.css';
import { currencies } from '../../currencies';
import React from 'react';

const Select = ({ title, onChange }) => {
	return (
		<label>
			<span className='form__labelText'>{title}</span>

			<select className='form__select' onChange={onChange}>
				{currencies.map(option => (
					<option value={option.course} key={option.course}>
						{option.currency}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
