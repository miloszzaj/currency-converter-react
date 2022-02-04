import { Button } from './styled';
const FormButton = ({ buttonBody, type }) => {
	return <Button type={type}>{buttonBody}</Button>;
};

export default FormButton;
