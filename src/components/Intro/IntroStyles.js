import styled from 'styled-components';

export const IntroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('./grenoble.jpg');
`;

export const IntroImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	position: absolute;
	z-index: -1;
`;

export const FrameworkLogo = styled.img`
	object-fit: cover;
	width: 150px;
	height: 150px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-self: center;

	@media screen and (max-width: 568px) {
		width: 80px;
		height: 80px;
	}
`

export const LogoWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2rem;
	margin-top: 4rem;

	/* @media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	} */
`;