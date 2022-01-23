import './style.css';
import FormParagraph from '../FormParagraph';
import Select from '../Select';
import Input from '../Input/input';
import FormContainer from '../FormContainer';

const Form = () => {
	return (
		<FormContainer className='form'>
			<fieldset className='form__fieldset'>
				<legend className='form__legend'>Currency Converter</legend>
				<FormParagraph title='Waluta:'>
					<Select />
				</FormParagraph>
				<FormParagraph title='Ilość*:'>
					<Input
						className='form__amount'
						type='number'
						name='amount'
						step='0.01'
						min='0.1'
						placeholder='0.00'
						required={true}
					/>
					'to sa chilfdreny '
				</FormParagraph>

				<FormParagraph title='Aktualny kurs*:'>
					<Input
						className='form__course'
						type='number'
						name='course'
						step='0.001'
						min='0.1'
						placeholder='0.000'
						required={true}
					/>
				</FormParagraph>

				<p className='form__requiredText'>* - pola obowiązkowe</p>
				<p className='form__paragraph'>
					<button className='form__button' type='submit'>
						Przelicz
					</button>
				</p>
				<p className='form__paragraph'>
					<label className='form__scoreText'>
						Ilość PLN: <strong className='form__score'>0.000</strong>
					</label>
				</p>
				<p className='form__paragraph'>
					<button type='reset' className='form__button'>
						Wyczyść kalkulator
					</button>
				</p>
				<section className='addition'>
					<h2 className='addition__header'>Możesz sprawdzić aktualy kurs Dolara:</h2>
					<p className='center'>
						<button className='addition__button'>Sprawdz kurs USD</button>
					</p>
					<p className='addition__paragraph'></p>
				</section>
			</fieldset>
		</FormContainer>
	);
};

export default Form;
