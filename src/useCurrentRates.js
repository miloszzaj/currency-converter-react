import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentRates = () => {
	const [rates, setRates] = useState();

	useEffect(() => {
		const test = () => {
			(async () => {
				try {
					const res = await axios.get('https://api.exchangerate.host/latest?base=PLN');
					setRates(res.data.rates);
				} catch (error) {
					console.error(error);
				}
			})();
		};
		setTimeout(test, 2000);
	}, []);
	console.log(rates);
	return rates;
};
