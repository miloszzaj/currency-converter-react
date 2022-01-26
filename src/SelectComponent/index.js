import './style.css';
import { options } from './options';

const SelectComponent = ({ title }) => {
	return (
		<label>
			<span className='form__labelText'>{title}</span>
			<select className='form__select'>
				{options.map(option => (
					<option key={option.currency}>{option.currency}</option>
				))}
			</select>
		</label>
	);
};

export default SelectComponent;
