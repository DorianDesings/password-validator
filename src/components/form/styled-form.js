import styled from 'styled-components';

const StyledInput = styled.input`
	width: 100%;
	padding: 0;
	margin: 0;
	height: 2rem;
	padding-inline: 0.5rem;
	border-radius: 0.5rem;
	border: none;
	outline: none;
	background-color: #333;
	color: inherit;
`;

const StyledText = styled.p`
	text-align: left;
	color: ${({ isValid }) => (isValid ? 'lime' : 'crimson')};
`;

export { StyledInput, StyledText };
