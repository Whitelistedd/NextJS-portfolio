import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { client, urlFor } from '../../SanityClient'
import { Exp } from './Exp/Exp'
import { Skill } from './Skill/Skill'
import { ExpStateType, skillsStateType } from './SkillsAndExp.model'

export const SkillsAndExp: React.FC = () => {
  const [skills, SetSkills] = useState<skillsStateType>()
  const [experiences, SetExperiences] = useState<ExpStateType>()

  useEffect(() => {
    const experienceQuery = '*[_type == "experience"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(experienceQuery).then((data) => {
      console.log(data)
      SetExperiences(data)
    })

    client.fetch(skillsQuery).then((data) => {
      SetSkills(data)
    })
  }, [])

  return (
    <Container>
      <Title>Навыки и Опыт</Title>
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
              details={experience.tags}
            />
          ))}
        </ExperienceContainer>
      </Wrap>
    </Container>
  )
}

const ExperienceContainer = styled.div``

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 1em;
`

const Title = styled.h1`
  font-size: 2em;
  width: 100%;
`

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5em;
`

const Container = styled.section`
  font-size: 26px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 3em;
  justify-content: center;
  align-items: center;
  text-align: center;
`
