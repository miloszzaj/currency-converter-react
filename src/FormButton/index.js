import './style.css';
const FormButton = ({ buttonBody, type }) => {
	return (
		<button className='form__button' type={type}>
			{buttonBody}
		</button>
	);
};

export default FormButton;
