import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
	font-size: 25px;
`;

export const Content = styled.strong`
	color: rgb(158, 158, 158);
	${props =>
		props.color &&
		css`
			color: rgb(43, 144, 103);
			font-weight: 700;
		`}
`;
