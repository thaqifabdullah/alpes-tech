import { Column, Container, Heading, Row, Section, TextWrapper } from "../../globalStyles";
import { ColumnEducation, LocationDateWrapper, RowEducation, SectionTitle } from "./EducationStyles";

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import React, { useEffect } from 'react';

export default function Education () {

	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section inverse ref={ref} padding='100px 0'>
			<motion.div
				initial={initial}
				transition={{ delay: 0.1, duration: 0.6 }}
				animate={animation}
			>
				<Container>
					<SectionTitle inverse>Education</SectionTitle>
					<ColumnEducation grow={1} gap='20px'>

							<RowEducation>
								<Column>
									<TextWrapper inverse weight='bold'>
										Université Grenoble Alpes
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										Master of Software Engineering
									</TextWrapper>
								</Column>

								<LocationDateWrapper minWidth='150px'>
									<TextWrapper>
										<p>Grenoble, France</p>
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										2016 - 2019
									</TextWrapper>
								</LocationDateWrapper>
							</RowEducation>

							<RowEducation>
								<Column>
									<TextWrapper inverse weight='bold'>
										Université Grenoble Alpes
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										Bachelor’s Degree of Computer Science
									</TextWrapper>
								</Column>

								<LocationDateWrapper minWidth='150px'>
									<TextWrapper>
										<p>Grenoble, France</p>
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										2014 - 2016
									</TextWrapper>
								</LocationDateWrapper>
							</RowEducation>

							<RowEducation>
								<Column>
									<TextWrapper inverse weight='bold'>
										IUT1 de Grenoble
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										Diploma of Telecommunication & Networking
									</TextWrapper>
								</Column>

								<LocationDateWrapper minWidth='150px'>
									<TextWrapper>
										<p>Grenoble, France</p>
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										2012 - 2014
									</TextWrapper>
								</LocationDateWrapper>
							</RowEducation>

							<RowEducation>
								<Column>
									<TextWrapper inverse weight='bold'>
										Sekolah Sains Sultan Haji Ahmad Shah
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										SPM (6A+ 3A 1A-)
									</TextWrapper>
								</Column>

								<LocationDateWrapper minWidth='150px'>
									<TextWrapper>
										<p>Pekan, Pahang</p>
									</TextWrapper>
									<TextWrapper inverse fontStyle='italic'>
										2006 - 2010
									</TextWrapper>
								</LocationDateWrapper>
							</RowEducation>
							
						</ColumnEducation>
				</Container>
			</motion.div>
			
		</Section>
	)
}