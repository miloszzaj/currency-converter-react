import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentRates = () => {
	const [rates, setRates] = useState();
	const [date, setDate] = useState();

	useEffect(() => {
		const test = () => {
			(async () => {
				try {
					const res = await axios.get('https://api.exchangerate.host/latest?base=PLN');
					setRates(res.data.rates);
					setDate(res.data.date);
				} catch (error) {
					console.error(error);
				}
			})();
		};
		setTimeout(test, 500);
	}, []);
	console.log(rates, date);
	return { rates, date };
};
