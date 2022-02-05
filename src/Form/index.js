import Select from './Select';
import Input from './Input';
import FormButton from './FormButton';
import FormScore from './FormScore';
import FormRequiredText from './FormRequiredText';
import FormLegend from './FormLegend';
import FormData from './FormData';

import { Wrapper, Fieldset, Division } from './styled';

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
		<Wrapper onSubmit={onFormSubmit} onReset={onReset}>
			<Fieldset>
				<FormLegend title='Currency Converter' />
				<Division right>
					<FormData />
				</Division>
				<Division>
					<Select title='Waluta:' onChange={selectedCourseDisplay} />
				</Division>
				<Division>
					<Input title='Aktualny kurs*:' type='number' name='actualCourse' required={true} readOnly value={actualCourse} />
				</Division>
				<Division>
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
				</Division>
				<FormRequiredText text='* - pola obowiązkowe' />
				<Division>
					<FormButton buttonBody='Przelicz' type='submit' />
				</Division>
				<Division>
					<FormScore result={result} />
				</Division>
				<Division>
					<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
				</Division>
			</Fieldset>
		</Wrapper>
	);
};

export default Form;
