import { Title, Content } from './styled';
import { currencies } from '../../currencies';
import React from 'react';

const Select = ({ title, onChange, rates }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content onChange={onChange}>
				{currencies.map(option => (
					<option value={option.course} key={option.course}>
						{option.currency}
					</option>
				))}
			</Content>
		</label>
	);
};

export default Select;
