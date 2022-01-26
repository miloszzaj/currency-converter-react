import './style.css';
import FormParagraph from '../FormParagraph';
import SelectComponent from '../SelectComponent';
import InputComponent from '../InputComponent';
import FormButton from '../FormButton';
import FormScore from '../FormScore';
import FormRequiredText from '../FormRequiredText';
import FormLegend from '../FormLegend';

import { useState } from 'react';

const Form = () => {
	const [amount, setAmount] = useState(0);
	const [course, setCourse] = useState(0);
	const [result, setResult] = useState();
	const calculate = () => {
		setResult(amount * course);
	};
	console.log(result);

	const onFormSubmit = e => {
		console.log(e);
		e.preventDefault();
		calculate(amount, course);
		console.log(result);
	};

	return (
		<form className='form' onSubmit={onFormSubmit} result={result}>
			<fieldset className='form__fieldset'>
				<FormLegend title='Currency Converter' />
				<FormParagraph>
					<SelectComponent title='Waluta:' />
				</FormParagraph>
				<FormParagraph>
					<InputComponent
						title='Ilość*:'
						type='number'
						name='amount'
						step='0.01'
						min='0.1'
						placeholder='0.00'
						required={true}
						value={amount}
						onChange={e => setAmount(e.target.value)}
					/>
				</FormParagraph>
				<FormParagraph>
					<InputComponent
						title='Aktualny kurs*:'
						type='number'
						name='course'
						step='0.001'
						min='0.1'
						placeholder='0.000'
						required={true}
						value={course}
						onChange={e => setCourse(e.target.value)}
					/>
				</FormParagraph>
				<FormRequiredText text='* - pola obowiązkowe' />
				<FormParagraph>
					<FormButton buttonBody='Przelicz' type='submit' />
				</FormParagraph>
				<FormParagraph>
					<FormScore result={result} />
				</FormParagraph>
				<FormParagraph>
					<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
				</FormParagraph>
			</fieldset>
		</form>
	);
};

export default Form;
