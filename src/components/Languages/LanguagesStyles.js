import styled from "styled-components";

export const FlagIcon = styled.span`
	font-size: 100px;
	margin: auto auto ;
`

export const FlagsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2rem;
	margin-top: 4rem;

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const LangLevel = styled.h3`
	font-weight: 300;
	font-size: 1.3rem;
	letter-spacing: 2px;
	color: white;
	align-self: center;
	margin-top: 1rem;

	@media screen and (max-width: 768px) {
		font-weight: 100;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;