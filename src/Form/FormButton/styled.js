import styled from 'styled-components';

export const Button = styled.button`
	margin: 20px auto;
	color: ivory;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.color.siam};
	background-color: ${({ theme }) => theme.color.siam};
	padding: 20px;
	width: 200px;
	font-size: 1rem;

	&:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.color.eucalyptus};
		box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.color.eucalyptus};
	}
`;
