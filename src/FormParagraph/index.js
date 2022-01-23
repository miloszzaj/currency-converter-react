import './style.css';

const FormParagraph = ({ title, children }) => {
	return (
		<p className='form__paragraph'>
			<label>
				<span className='form__labelText'>{title}</span>
				{children}
			</label>
		</p>
	);
};

export default FormParagraph;
