import './style.css';

const SelectComponent = ({ title }) => {
	return (
		<label>
			<span className='form__labelText'>{title}</span>
			<select className='form__select'>
				<option>EUR (euro)</option>
				<option>USD (dolar amerykański)</option>
				<option>AED (dirham ZEA)</option>
				<option>AUD (dolar australijski)</option>
				<option>HKD (dolar Hongkongu)</option>
				<option>CAD (dolar kanadyjski)</option>
				<option>CHF (frank szwajcarski)</option>
				<option>GBP (funt szterling)</option>
				<option>JPY (jen)</option>
			</select>
		</label>
	);
};

export default SelectComponent;
