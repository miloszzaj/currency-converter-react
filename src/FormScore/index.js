import './style.css';
const FormScore = ({ result }) => {
	return (
		<label className='form__scoreText'>
			Ilość PLN: <strong className='form__score'>{result ? result : '0.000'}</strong>
		</label>
	);
};

export default FormScore;
