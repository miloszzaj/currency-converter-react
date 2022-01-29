import './style.css';
import { useState } from 'react';

const FormData = () => {
	const [date, setDate] = useState(new Date());

	setInterval(() => setDate(new Date()), 500);

	return (
		<div className='form__data'>
			Dzisiaj jest {date.toLocaleDateString('pl', { weekend: 'long', day: 'numeric', month: 'long', year: 'numeric' })},
			{date.toLocaleTimeString()}
		</div>
	);
};

export default FormData;
