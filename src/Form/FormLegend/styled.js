import styled from 'styled-components';

export const Legend = styled.legend`
	border: 2px solid ${({ theme }) => theme.color.woodland};
	border-radius: 5px;
	padding: 20px;
	background-color: ${({ theme }) => theme.color.highland};
	color: white;
	font-weight: 600;
	text-transform: uppercase;
	margin: 0 auto;
`;
