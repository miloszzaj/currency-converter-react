import { useState } from 'react';

export const useCounter = () => {
	const [counter, setCounter] = useState(0);
	const setPlusOne = () => {
		setCounter(counter + 1);
	};
	return { counter, setPlusOne };
};
