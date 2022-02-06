import styled, { css } from 'styled-components';

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

export const Division = styled.div`
	margin: 20px auto;
	line-height: 1.5;

	${props =>
		props.right &&
		css`
			margin-right: 40px;
		`}
`;
