import styled from "styled-components";
import { Column } from "../../globalStyles";

export const SectionTitle = styled.p`
	font-size: clamp(1rem, 13vw, 2rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: 20px;
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.1rem;
	line-height: 1.06;
	text-align: center;
	width: 300px;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	border-bottom: 1px solid;
	border-color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};;
	padding-bottom: 10px;
`;

export const ColumnEducation = styled(Column)`
	/* min-width: 375px; */
`;

export const RowEducation = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	/* margin-top: 4rem; */

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 0.4rem;
	}
`;
export const LocationDateWrapper = styled.span`
	text-align: right;

	@media screen and (max-width: 568px) {
		text-align: left;
	}
`;