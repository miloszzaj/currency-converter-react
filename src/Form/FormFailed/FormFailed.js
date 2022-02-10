import { Wrapper } from '../FormLoading/styled';
import Face from './sadGif.gif';

const FormFailed = () => {
	return (
		<>
			<Wrapper>
				<div>Hmm... coś poszło nie tak... </div>
				<div>Sprawdź czy masz połączenie z internetem. </div>
				<div>Jeśli tak, to błąd jest po naszej stronie.</div>
				<div>Skontaktuj się z administratorem, albo spróbuj później, najwyraźniej nad czymś aktualnie pracujemy.</div>
			</Wrapper>
			<img src={Face} alt='sadGif' />
		</>
	);
};

export default FormFailed;
