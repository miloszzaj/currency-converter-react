import { useState } from 'react';

export const useCurrentDate = () => {
	const [date, setDate] = useState(new Date());

	setInterval(() => setDate(new Date()), 500);
	return date;
};
