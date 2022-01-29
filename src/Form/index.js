import './style.css';
import Select from '../Select';
import Input from '../Input';
import FormButton from '../FormButton';
import FormScore from '../FormScore';
import FormRequiredText from '../FormRequiredText';
import FormLegend from '../FormLegend';
import FormData from '../FormData';

import { useState } from 'react';

const Form = () => {
	const [amount, setAmount] = useState('');
	const [result, setResult] = useState();
	const [actualCourse, setActualCourse] = useState('4.5697');

	const selectedCourseDisplay = e => {
		setActualCourse(e.target.value);
	};
	const calculate = () => {
		const res = amount * actualCourse;
		setResult(res.toFixed(3));
	};

	const onFormSubmit = e => {
		e.preventDefault();
		calculate(amount, actualCourse);
	};

	const onReset = () => {
		setAmount('');
		setActualCourse('4.5697');
		setResult();
	};

	return (
		<form className='form' onSubmit={onFormSubmit} onReset={onReset}>
			<fieldset className='form__fieldset'>
				<FormLegend title='Currency Converter' />
				<div className='form__paragraph right'>
					<FormData />
				</div>
				<div className='form__paragraph'>
					<Select title='Waluta:' onChange={selectedCourseDisplay} />
				</div>
				<div className='form__paragraph'>
					<Input title='Aktualny kurs*:' type='number' name='actualCourse' required={true} value={actualCourse} />
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
				<FormRequiredText text='* - pola obowiązkowe' />
				<div className='form__paragraph'>
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
