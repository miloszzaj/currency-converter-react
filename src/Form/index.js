import './style.css';
import Select from '../Select';
import Input from '../Input';
import FormButton from '../FormButton';
import FormScore from '../FormScore';
import FormRequiredText from '../FormRequiredText';
import FormLegend from '../FormLegend';
import FormData from '../FormData';
import { currencies } from '../currencies';

import { useState } from 'react';

const Form = () => {
	const [amount, setAmount] = useState('');
	const [course, setCourse] = useState('');
	const [result, setResult] = useState();
	const calculate = () => {
		const res = amount * course;
		setResult(res.toFixed(3));
	};

	const currencyCourse = () => {
		console.log(currencies.map(option => option.course));
	};

	const onFormSubmit = e => {
		e.preventDefault();
		calculate(amount, course);
	};

	const onReset = e => {
		setAmount('');
		setCourse('');
		setResult();
	};

	return (
		<form className='form' onSubmit={onFormSubmit} onReset={onReset}>
			<fieldset className='form__fieldset'>
				<FormLegend title='Currency Converter' />
				<div className='form__paragraph'>
					<FormData />
				</div>
				<div className='form__paragraph'>
					<Select title='Waluta:' />
				</div>
				<div className='form__paragraph'>
					<Input
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
				</div>
				<div className='form__paragraph'>
					<Input
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
				</div>
				<FormRequiredText text='* - pola obowiązkowe' />
				<div className='form__paragraph'>
					<button onClick={currencyCourse}>kliknij</button>
					<FormButton buttonBody='Przelicz' type='submit' />
				</div>
				<div className='form__paragraph'>
					<FormScore result={result} />
				</div>
				<div className='form__paragraph'>
					<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
				</div>
			</fieldset>
		</form>
	);
};

export default Form;
