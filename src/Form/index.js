import Select from './Select';
import Input from './Input';
import FormButton from './FormButton';
import FormScore from './FormScore';
import FormRequiredText from './FormRequiredText';
import FormLegend from './FormLegend';
import FormData from './FormData';
import FormDataDownloadDate from './FormDataDownloadDate/FormDataDownloadDate';
import FormFailed from './FormFailed/FormFailed';

import { Wrapper, Fieldset, Division } from './styled';

import { useCurrentRates } from '../useCurrentRates';

import { useState } from 'react';
import FormLoading from './FormLoading/FormLoading';

const Form = () => {
	const [amount, setAmount] = useState();
	const [result, setResult] = useState();
	const [actualCourse, setActualCourse] = useState();
	const [currencyShort, setCurrencyShort] = useState('EUR');

	const { rates, date } = useCurrentRates();

	const selectedCourseDisplay = e => {
		const selectedIndex = e.target.options.selectedIndex;
		setCurrencyShort(e.target.options[selectedIndex].getAttribute('short'));
		setActualCourse(e.target.value);
		calculate();
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
		setAmount();
		setActualCourse(actualCourse);
		setResult();
	};

	return (
		<Wrapper onSubmit={onFormSubmit} onReset={onReset}>
			<Fieldset>
				<FormLegend title='Currency Converter' />
				{rates.status === 'ok' && (
					<>
						<Division right>
							<FormData />
						</Division>
						<Division>
							<Select rates={rates} title='Waluta:' onChange={selectedCourseDisplay} />
						</Division>
						<Division>
							<Input
								title='Aktualny kurs:'
								type='number'
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
							<FormScore result={result} amount={amount} currencyShort={currencyShort} />
						</Division>
						<Division>
							<FormDataDownloadDate date={date} />
						</Division>
						<Division>
							<FormButton buttonBody='Wyczyść kalkulator' type='reset' />
						</Division>
					</>
				)}
				{rates.status === 'loading' && <FormLoading />}
				{rates.status === 'error' && <FormFailed />}
			</Fieldset>
		</Wrapper>
	);
};

export default Form;
