import { Wrapper } from './styled';
import Dots from './dots.gif';

const FormLoading = () => {
	return (
		<Wrapper>
			<p>Sekundka...</p>
			<p>Ładuje kursy z Europejskiego Banku Centralnego...</p>
			<img src={Dots} alt='dots' width='100' height='100' />
		</Wrapper>
	);
};

export default FormLoading;
