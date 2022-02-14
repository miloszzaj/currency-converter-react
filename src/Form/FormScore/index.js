import { Wrapper, Content } from './styled';

const FormScore = ({ result, amount, actualCourse, currencyShort }) => {
	return (
		<Wrapper>
			Ilość PLN:{' '}
			<Content color={result ? 1 : 0}>
				{' '}
				{amount} PLN to {result} {currencyShort}
				{/* {result ? result : '0.000'} */}
			</Content>
		</Wrapper>
	);
};

export default FormScore;
