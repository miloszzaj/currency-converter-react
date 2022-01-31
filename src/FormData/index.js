import './style.css';
import { useCurrentDate } from '../useCurrentDate';

const FormData = () => {
	const date = useCurrentDate();
	return (
		<div className='form__data'>
			Dzisiaj jest {date.toLocaleDateString('pl', { weekend: 'long', day: 'numeric', month: 'long', year: 'numeric' })},
			{date.toLocaleTimeString()}
		</div>
	);
};

export default FormData;
