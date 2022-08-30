import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Heading, MainHeading } from "../../globalStyles";
import { FrameworkLogo, IntroImg, IntroSection, LogoWrapper } from "./IntroStyles";
import { motion } from "framer-motion";

export default function Intro () {
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
		<IntroSection ref={ref}>
			<Container>
				{/* <Avatar src="./robot.jpg" /> */}
				{/* <Heading>Frontend Web Engineer</Heading> */}
				<MainHeading>Frontend Web Engineer</MainHeading>
				<LogoWrapper>
					<motion.div
						initial={initial}
						transition={{ delay: 0.1, duration: 1.2 }}
						animate={animation}
					>
						<FrameworkLogo src="./angular.svg" />
					</motion.div>

					<motion.div
						initial={initial}
						transition={{ delay: 0.1, duration: 1.2 }}
						animate={animation}
					>
						<FrameworkLogo src="./vue.svg" />
					</motion.div>
					
					<motion.div
						initial={initial}
						transition={{ delay: 0.1, duration: 1.2 }}
						animate={animation}
					>
						<FrameworkLogo src="./react.svg" />
					</motion.div>
					
				</LogoWrapper>
				
			</Container>
		</IntroSection>
	)
}