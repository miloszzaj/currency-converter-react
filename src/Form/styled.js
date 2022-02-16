import styled from 'styled-components';

export const Wrapper = styled.form`
	max-width: 550px;
	margin: 30px auto;
`;

export const Fieldset = styled.fieldset`
	z-index: 2;
	display: flex;
	justify-content: center;
	flex-direction: column;
	border: none;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.color.orangeWhite};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 25px;
`;
