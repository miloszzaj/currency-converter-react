import './style.css';

const FormContainer = ({ children, onSubmit }) => {
	return (
		<form className='form' onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default FormContainer;
