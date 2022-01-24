import './style.css';
import FormParagraph from '../FormParagraph';
import SelectComponent from '../SelectComponent';
import InputComponent from '../InputComponent';
import FormContainer from '../FormContainer';
import FormButton from '../FormButton';
import FormScore from '../FormScore';
import FormRequiredText from '../FormRequiredText';
import AdditionComponent from '../AdditionComponent';
import AdditionalHeader from '../AdditionalHeader';
import AdditionalParagraph from '../AdditionalParagraph';

const Form = () => {
	return (
		<FormContainer className='form'>
			<fieldset className='form__fieldset'>
				<legend className='form__legend'>Currency Converter</legend>
				<FormParagraph>
					<SelectComponent title='Waluta:' />
				</FormParagraph>
				<FormParagraph>
					<InputComponent
						title='Ilość*:'
						// className='form__input'
						type='number'
						name='amount'
						step='0.01'
						min='0.1'
						placeholder='0.00'
						required={true}
					/>
				</FormParagraph>

				<FormParagraph>
					<InputComponent
						title='Aktualny kurs*:'
						// className='form__input'
						type='number'
						name='course'
						step='0.001'
						min='0.1'
						placeholder='0.000'
						required={true}
					/>
				</FormParagraph>
				<FormRequiredText text='* - pola obowiązkowe' />
				<FormParagraph>
					<FormButton buttonBody='Przelicz' type='submit' />
				</FormParagraph>

				<FormParagraph>
					<FormScore />
				</FormParagraph>
				<FormParagraph>
					<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
				</FormParagraph>

				<AdditionComponent>
					<AdditionalHeader title='Możesz sprawdzić aktualy kurs Dolara:' />
					<FormParagraph>
						<FormButton buttonBody='Sprawdz kurs USD' />
					</FormParagraph>

					{/* <p className='center'>
						<button className='addition__button'>Sprawdz kurs USD</button>
					</p> */}
					<AdditionalParagraph />
				</AdditionComponent>
			</fieldset>
		</FormContainer>
	);
};

export default Form;
