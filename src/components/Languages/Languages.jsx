import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Column, Container, Section, TextWrapper } from "../../globalStyles";
import { SectionTitle } from "../Education/EducationStyles";
import { FlagIcon, FlagsWrapper, LangLevel } from "./LanguagesStyles";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";

export default function Languages () {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.4 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	return (
		<Section ref={ref}>
			<Container>
				<SectionTitle> Languages </SectionTitle>
				<FlagsWrapper>
					<motion.div
						initial={initial}
						transition={{ delay: 0.1, duration: 0.6 }}
						animate={animation}
					>
						<Column>
							<FlagIcon className="fi fi-fr" />
							<LangLevel>Proficient</LangLevel>
						</Column>
					</motion.div>
					
					<motion.div
						initial={initial}
						transition={{ delay: 0.2, duration: 0.6 }}
						animate={animation}
					>
						<Column>
							<FlagIcon className="fi fi-gb" />
							<LangLevel>Proficient</LangLevel>
						</Column>
					</motion.div>
					
					<motion.div
						initial={initial}
						transition={{ delay: 0.3, duration: 0.6 }}
						animate={animation}
					>
						<Column>
							<FlagIcon className="fi fi-my" />
							<LangLevel>Fluent</LangLevel>
						</Column>
					</motion.div>
					
					
				</FlagsWrapper>
				
			</Container>
		</Section>
	)
}