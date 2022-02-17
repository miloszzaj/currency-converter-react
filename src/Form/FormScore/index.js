import { Wrapper, Content } from './styled';

const FormScore = ({ result, amount, actualCourse, currencyShort }) => {
	return (
		<Wrapper>
			Ilość PLN:{' '}
			<Content color={result ? 1 : 0}>{!result ? `0.000` : `${amount} PLN to ${result} ${currencyShort}`}</Content>
		</Wrapper>
	);
};

export default FormScore;
