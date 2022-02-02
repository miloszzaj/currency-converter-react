import './App.css';
import Form from './Form';
// import { useState } from 'react';
import { useCounter } from './useCounter';

function App() {
	const { counter, setPlusOne } = useCounter();
	return (
		<main className='main'>
			<Form />
			<p>{counter}</p>
			<button onClick={setPlusOne}>+1</button>
		</main>
	);
}

export default App;
