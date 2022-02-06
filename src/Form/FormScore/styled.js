import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
	font-size: 25px;
`;

export const Content = styled.strong`
	color: ${({ theme }) => theme.color.pumice};
	${props =>
		props.color &&
		css`
			color: ${({ theme }) => theme.color.eucalyptus};
			font-weight: 700;
		`}
`;
