import { motion } from "framer-motion";
import styled from "styled-components";
import { Section, Container, Row, Column, TextWrapper } from "../../globalStyles";


export const Avatar = styled.img`
	vertical-align: middle;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-self: center;
	margin-bottom: 10px;
	border: 1px solid rgba( 0, 0, 0, 0.2);
	box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TextInfo = styled.p`
	color: #ffffff;
	text-align: center;
	font-size: 1.2em;

	@media screen and (max-width: 768px) {
		font-size: 0.8em;
	}
`;

