import Select from './Select';
import Input from './Input';
import FormButton from './FormButton';
import FormScore from './FormScore';
import FormRequiredText from './FormRequiredText';
import FormLegend from './FormLegend';
import FormData from './FormData';
import FormDataDownloadDate from './FormDataDownloadDate/FormDataDolnloadDate';
import FormFailed from './FormFailed/FormFailed';

import { Wrapper, Fieldset, Division } from './styled';

import { useCurrentRates } from '../useCurrentRates';

import { useState, useEffect } from 'react';

const Form = () => {
	const [amount, setAmount] = useState('');
	const [result, setResult] = useState();
	const [actualCourse, setActualCourse] = useState('4.5697');

	const selectedCourseDisplay = value => {
		setActualCourse(value);
		console.log(actualCourse);
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

	const { rates, date } = useCurrentRates();

	// useEffect(() => {
	// 	const downloadData = async () => {
	// 		try {
	// 			const promise = fetch('https://api.exchangerate.host/latest?base=PLN');
	// 			const res = await promise;
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			const prod = await res.json();
	// 			setRates(prod.rates);
	// 		} catch (error) {
	// 			console.error('coś źle', error);
	// 		}
	// 	};
	// 	setTimeout(downloadData, 2000);
	// }, []);
	// const textFunction = () => console.log(rates);
	// setTimeout(textFunction, 2000);

	// console.log(rates);

	return (
		<Wrapper onSubmit={onFormSubmit} onReset={onReset}>
			<Fieldset>
				<FormLegend title='Currency Converter' />
				{rates.status === 'ok' ? (
					<>
						<Division right>
							<FormData />
						</Division>
						<Division>
							<Select rates={rates} title='Waluta:' onChange={selectedCourseDisplay} />
						</Division>
						<Division>
							<Input
								title='Aktualny kurs*:'
								// type='number'
								name='actualCourse'
								required={true}
								defaultValue={actualCourse}
								readOnly
								value={actualCourse}
							/>
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
							<FormDataDownloadDate date={date} />
						</Division>
						<Division>
							<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
						</Division>
					</>
				) : (
					<FormFailed />
				)}
			</Fieldset>
		</Wrapper>
	);
};

export default Form;
