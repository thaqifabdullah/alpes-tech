import { Section, Container, Row, Column, TextWrapper } from "../../globalStyles";
import { Avatar, TextInfo } from "./AboutStyles";
import { FaHome } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import React, { useEffect } from 'react';

export default function About () {

	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.8 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);

	return (
		<Section padding='100px 0' ref={ref}>
			<Container
			>
				<Row>
					<Avatar src="./profile.jpg"></Avatar>
				</Row>
				<Row justify="center">
					<Column justify='center' align='center' gap='5px'>
						<motion.div
							initial={initial}
							transition={{ delay: 0.1, duration: 0.6 }}
							animate={animation}
						>
							<Row>
								<TextInfo>
									Mohd Thaqif Bin Abdullah Hasim
								</TextInfo>
							</Row>
						</motion.div>

						<motion.div
							initial={initial}
							transition={{ delay: 0.2, duration: 0.6 }}
							animate={animation}
						>
							<Row 
								gap={'10px'}
							>
								<Column>
									<FaHome style={{ color: '#fff' }}/>
								</Column>
								<Column>
									<TextInfo>
										71800 Bandar Baru Nilai
									</TextInfo>
								</Column>
							</Row>
						</motion.div>

						<motion.div
							initial={initial}
							transition={{ delay: 0.3, duration: 0.6 }}
							animate={animation}
						>
							<Row 
								gap={'10px'}
							>
								<Column>
									<BiPhone style={{ color: '#fff' }}/>
								</Column>
								<Column>
									<TextInfo>
										(+60) 1121489481
									</TextInfo>
								</Column>
							</Row>
						</motion.div>

						<motion.div
							initial={initial}
							transition={{ delay: 0.4, duration: 0.6 }}
							animate={animation}	
						>
							<Row 
								gap={'10px'}
							>
								<Column>
									<FiMail style={{ color: '#fff' }}/>
								</Column>
								<Column>
									<TextInfo>
										thaqifabdullah@gmail.com
									</TextInfo>
								</Column>
							</Row>			
						</motion.div>

					</Column>
				</Row>
			</Container>
		</Section>
	)
}