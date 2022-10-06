import { Hightlight, SectionTitle } from '../SectionTitle/SectionTitle'
import { client, urlFor } from '../../SanityClient'
import { useEffect, useState } from 'react'

import { AboutCardsState } from './About.model'
import { Card } from './Card/Card'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

export const About: React.FC = () => {
  const { t, lang } = useTranslation('About')
  const [aboutCards, setAboutCards] = useState<AboutCardsState[]>([])

  useEffect(() => {
    const query = '*[_type == "about"]'

    client.fetch(query).then((data) => setAboutCards(data))
  }, [])

  return (
    <Container id="AboutMe">
      <Wrap>
        <SectionTitle>
          {lang === 'ru'
            ? t('title').substring(0, 12)
            : t('title').substring(0, 7)}{' '}
          <Hightlight>
            {lang === 'ru'
              ? t('title').substring(12, 31)
              : t('title').substring(7, 24)}{' '}
          </Hightlight>
          {lang === 'ru'
            ? t('title').substring(31, 40)
            : t('title').substring(24, 30)}{' '}
          <Hightlight>
            {lang === 'ru'
              ? t('title').substring(40)
              : t('title').substring(30)}{' '}
          </Hightlight>
        </SectionTitle>
        <Cards>
          {aboutCards?.map((card, index) => (
            <Card
              key={`about-cards ${index}`}
              title={t(`cards.${card.title}`)}
              description={t(`cardDescriptions.${card.title}`)}
              ImageSRC={urlFor(card.mainImage).url()}
            />
          ))}
        </Cards>
      </Wrap>
    </Container>
  )
}

const Cards = styled.div`
  display: flex;
  width: 100%;
  gap: 2em;
  justify-content: center;
  align-self: flex-end;
  flex-wrap: wrap;
`

const Wrap = styled.div`
  display: flex;
  gap: 2em;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;

  @media only screen and (max-width: 2000px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 17px;
  }
`
