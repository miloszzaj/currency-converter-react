import './style.css';

const FormContainer = ({ children }) => {
	console.log('childreen', children);
	return <form className='form'>{children}</form>;
};

export default FormContainer;
