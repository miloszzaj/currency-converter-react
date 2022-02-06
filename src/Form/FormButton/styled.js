import styled from 'styled-components';

export const Button = styled.button`
	margin: 0 auto;
	color: ivory;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.color.siam};
	background-color: ${({ theme }) => theme.color.siam};
	padding: 20px;
	width: 200px;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.color.eucalyptus};
		box-shadow: 0px 0px 30px 6px ${({ theme }) => theme.color.eucalyptus};
	}
`;
