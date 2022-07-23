import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { client, urlFor } from '../../SanityClient'
import { Hightlight, SectionTitle } from '../SectionTitle/SectionTitle'
import { Exp } from './Exp/Exp'
import { Skill } from './Skill/Skill'
import { ExpStateType, skillsStateType } from './SkillsAndExp.model'

export const SkillsAndExp: React.FC = () => {
  const [skills, SetSkills] = useState<skillsStateType>()
  const [experiences, SetExperiences] = useState<ExpStateType>()

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(experienceQuery).then((data) => {
      SetExperiences(data)
    })

    client.fetch(skillsQuery).then((data) => {
      SetSkills(data)
    })
  }, [])

  return (
    <Container>
      <SectionTitle>
        <Hightlight>Навыки</Hightlight> и <Hightlight>Опыт</Hightlight>
      </SectionTitle>
      <Wrap>
        <SkillsContainer>
          {skills?.map((skill, index) => (
            <Skill
              key={`skills-${index}`}
              title={skill.title}
              url={skill.link}
              ImageSRC={urlFor(skill.mainImage).url()}
            />
          ))}
        </SkillsContainer>
        <ExperienceContainer>
          {experiences?.map((experience, index) => (
            <Exp
              key={`Exp-${index}`}
              date={experience.date}
              details={experience.details}
            />
          ))}
        </ExperienceContainer>
      </Wrap>
    </Container>
  )
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1em;
  width: 500px;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  gap: 1em;
`

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  gap: 5em;
`

const Container = styled.section`
  font-size: 26px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 3em;
  padding: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 680px) {
    ${SkillsContainer} {
      align-items: center;
      justify-content: center;
    }
    ${ExperienceContainer} {
      font-size: 25px;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 350px) {
    ${ExperienceContainer} {
      font-size: 18px;
    }
  }
`
