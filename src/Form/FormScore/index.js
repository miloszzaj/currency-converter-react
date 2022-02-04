import { Wrapper, Content } from './styled';

const FormScore = ({ result }) => {
	return (
		<Wrapper>
			Ilość PLN: <Content color={result !== 0 ? true : false}>{result ? result : ' 0.000'}</Content>
		</Wrapper>
	);
};

export default FormScore;
