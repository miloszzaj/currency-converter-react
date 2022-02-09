import { Title, Content } from './styled';
import { currencies } from '../../currencies';
import React from 'react';

const Select = ({ title, onChange, rates }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content>
				{Object.keys(currencies).map(currency => {
					return <option key={currency}>{currency}</option>;
				})}
			</Content>
		</label>
	);
};

export default Select;
