import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCurrentRates = () => {
	const [rates, setRates] = useState({ status: 'loading' });
	const [date, setDate] = useState();

	useEffect(() => {
		const FetchData = () => {
			(async () => {
				try {
					const res = await axios.get('https://api.exchangerate.host/latest?base=PLN');
					setRates({ ratio: res.data.rates, status: 'ok' });
					setDate(res.data.date);
				} catch {
					setRates({ status: 'error' });
				}
			})();
		};
		setTimeout(FetchData, 2000);
	}, []);
	return { rates, date };
};
