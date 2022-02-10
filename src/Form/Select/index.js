import { Title, Content } from './styled';
import React from 'react';

const Select = ({ title, onChange, rates }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content onChange={e => onChange(e.target.value)}>
				{Object.entries(rates.ratio).map(currencyData => {
					return (
						<option key={currencyData[0]} value={currencyData[1]}>
							{currencyData[0]}
						</option>
					);
				})}
			</Content>
		</label>
	);
};

export default Select;
