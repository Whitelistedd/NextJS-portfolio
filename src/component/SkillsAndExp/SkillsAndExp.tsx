import { ExpType, skillsType } from './SkillsAndExp.model'
import { Hightlight, SectionTitle } from '../SectionTitle/SectionTitle'
import { useEffect, useState } from 'react'

import { Exp } from './Exp/Exp'
import { Skill } from './Skill/Skill'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

export const SkillsAndExp: React.FC = () => {
  const [skills, SetSkills] = useState<skillsType[] | []>()
  const [experiences, SetExperiences] = useState<ExpType[] | []>()

  const { t, lang } = useTranslation('SkillsAndExp')
  const supabase = createClientComponentClient()

  useEffect(() => {
    supabase
      .from('experience')
      .select('*')
      .then((res) => {
        SetExperiences(res.data || [])
      })

    supabase
      .from('skills')
      .select('*')
      .then((res) => {
        SetSkills(res.data || [])
      })
  }, [])

  return (
    <Container id="Skills">
      <SectionTitle>
        <Hightlight>{t('title').substring(0, 6)}</Hightlight>
        {lang === 'en'
          ? t('title').substring(6, 10)
          : t('title').substring(6, 9)}
        <Hightlight>
          {lang === 'en' ? t('title').substring(10) : t('title').substring(9)}
        </Hightlight>
      </SectionTitle>
      <Wrap>
        <SkillsContainer>
          {skills?.map((skill, index) => (
            <Skill
              key={`skills-${index}`}
              title={skill.title}
              link={skill.link}
              image={skill.image}
            />
          ))}
        </SkillsContainer>
        <ExperienceContainer>
          {experiences?.map((experience, index) => (
            <Exp
              key={`Exp-${index}`}
              year={experience.year}
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
  padding-top: 70px;

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
