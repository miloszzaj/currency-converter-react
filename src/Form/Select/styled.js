import styled from 'styled-components';

export const Title = styled.span`
	width: 150px;
	display: inline-block;
	font-weight: 600;
`;

export const Content = styled.select`
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.color.highland};
	width: 300px;
	line-height: 1.5;
	padding: 10px;
`;

export const ContentInput = styled.input`
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.color.highland};
	width: 300px;
	line-height: 1.5;
	padding: 10px;
`;
