import './style.css';
import { currencies } from '../currencies';

const Select = ({ title }) => {
	return (
		<label>
			<span className='form__labelText'>{title}</span>
			<select className='form__select'>
				{currencies.map(option => (
					<option key={option.currency}>{option.currency}</option>
				))}
			</select>
		</label>
	);
};

export default Select;
