import { Title, Content } from './styled';
import { currencies } from '../../currencies';
import React from 'react';

const Select = ({ title, onChange }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content onChange={e => onChange(e)}>
				{Object.keys(currencies).map(currency => {
					return (
						<option key={currency} value={currency}>
							{currency}
						</option>
					);
				})}
			</Content>
		</label>
	);
};

export default Select;
