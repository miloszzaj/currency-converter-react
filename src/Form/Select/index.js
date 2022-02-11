import { Title, Content } from './styled';
import React from 'react';

const Select = ({ title, onChange, rates, onTest }) => {
	return (
		<label>
			<Title>{title}</Title>
			<Content onTest={e => onTest(e.target.value)} onChange={e => onChange(e)}>
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
