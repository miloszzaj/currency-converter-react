import './style.css';
const FormButton = ({ buttonBody, type, onClick }) => {
	return (
		<button className='form__button' type={type} onClick={onClick}>
			{buttonBody}
		</button>
	);
};

export default FormButton;
