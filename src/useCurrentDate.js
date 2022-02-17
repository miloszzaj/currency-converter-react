import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setDate(new Date()), 950);
		return () => clearInterval(interval);
	}, []);
	return date;
};
