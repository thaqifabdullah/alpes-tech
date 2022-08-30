import { Container, Heading, Section, TextWrapper } from "../../globalStyles";
import { SectionTitle } from "../Education/EducationStyles";
import { SkillsColumn, SkillsName, SkillsText, SkillsWrapper } from "./SkillsStyles";
import { SkillsData } from "../../data/Skills";

export default function Skills () {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};
	return (
		<Section inverse position='relative' padding='50px 0 100px 0'>
			<Container>
				<SectionTitle inverse>
					Skills
				</SectionTitle>
				<SkillsWrapper>
					{
						SkillsData.map( (skill, index) => 
							(
								<SkillsColumn
									initial={initial}
									animate={animate}
									transition={{ duration: 0.5 + index * 0.1 }}
									key={index}
								>
									<SkillsName>{ skill.header }</SkillsName>
									<ul>
										{
											skill.items.map((item, index) =>(
													<SkillsText key={index}>{item}</SkillsText>
											))
										}
									</ul>
								</SkillsColumn>
							)
						)
					}
				</SkillsWrapper>
			</Container>
		</Section>
	)
}