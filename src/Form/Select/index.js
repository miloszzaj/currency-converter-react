import { Title, Content, Wrapper } from './styled';

const Select = ({ title, onChange, rates }) => {
	return (
		<Wrapper>
			<Title>{title}</Title>
			<Content onChange={e => onChange(e)}>
				{Object.entries(rates.ratio).map(currencyData => {
					return (
						<option key={currencyData[0]} short={currencyData[0]} value={currencyData[1]}>
							{currencyData[0]}
						</option>
					);
				})}
			</Content>
		</Wrapper>
	);
};

export default Select;
