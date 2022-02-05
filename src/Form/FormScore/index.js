import { Wrapper, Content } from './styled';

const FormScore = ({ result }) => {
	return (
		<Wrapper>
			Ilość PLN: <Content color={result ? 1 : 0}>{result ? result : '0.000'}</Content>
		</Wrapper>
	);
};

export default FormScore;
