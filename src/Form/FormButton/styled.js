import styled from 'styled-components';

export const Button = styled.button`
	margin: 0 auto;
	color: ivory;
	border-radius: 5px;
	border: 1px solid rgb(52, 56, 46);
	background-color: rgb(83, 89, 73);
	padding: 20px;
	width: 200px;

	&:hover {
		cursor: pointer;
		background-color: rgb(43, 144, 103);
		box-shadow: 0px 0px 14px 6px rgb(84, 168, 135);
	}
`;
