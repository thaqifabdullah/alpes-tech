import { Column, Container, Heading, Row, Section, TextWrapper } from "../../globalStyles";
import { JobList, JobScopes } from "./ExperienceStyles";

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import React, { useEffect } from 'react';

import { Experiences } from "../../data/ExperienceData";
import { LocationDateWrapper, RowEducation, SectionTitle } from "../Education/EducationStyles";

export default function Experience () {

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
		<Section inverse ref={ref} padding='50px 0 100px 0 '>
			<motion.div
				initial={initial}
				transition={{ delay: 0.1, duration: 0.6 }}
				animate={animation}
			>
				<Container>
					<SectionTitle inverse>Experience</SectionTitle>
					<Column gap='20px'>
					{
						Experiences.map((exp) => {
							return (
								<>
									<RowEducation justify='space-between' wrap='wrap'>
										<Column>
											<TextWrapper inverse weight='bold'>
												{ exp.company }
											</TextWrapper>
											<TextWrapper inverse fontStyle='italic'>
												{ exp.job }
											</TextWrapper>
										</Column>

										<LocationDateWrapper minWidth='200px'>
											<TextWrapper>
												<p>{ exp.location }</p>
											</TextWrapper>
											<TextWrapper inverse fontStyle='italic'>
												{ exp.date }
											</TextWrapper>
										</LocationDateWrapper>
									</RowEducation>

									<JobScopes>
										{
											(exp.jobScope).map((jobItem) => {
												return (
													<JobList>
														<TextWrapper inverse weight='bold'>
															{ jobItem.title }
														</TextWrapper> : 
														<TextWrapper>
															{ jobItem.detail }
														</TextWrapper>
													</JobList>
												)
											})
										}
									</JobScopes>
								</>
							)
						})
					}
					</Column>
					
				</Container>
			</motion.div>
			
		</Section>
	)
}