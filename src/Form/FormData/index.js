import { Data } from './styled';
import { useCurrentDate } from '../../useCurrentDate';

const FormData = () => {
	const date = useCurrentDate();
	return (
		<Data>
			Dzisiaj jest {date.toLocaleDateString('pl', { weekend: 'long', day: 'numeric', month: 'long', year: 'numeric' })},
			{date.toLocaleTimeString()}
		</Data>
	);
};

export default FormData;
