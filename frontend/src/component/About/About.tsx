import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { client, urlFor } from '../../SanityClient'
import { Hightlight, SectionTitle } from '../SectionTitle/SectionTitle'
import { AboutCardsState } from './About.model'
import { Card } from './Card/Card'

export const About: React.FC = () => {
  const [aboutCards, setAboutCards] = useState<AboutCardsState[]>([])

  useEffect(() => {
    const query = '*[_type == "about"]'

    client.fetch(query).then((data) => setAboutCards(data))
  }, [])

  return (
    <Container id="Обо мне">
      <Wrap>
        <SectionTitle>
          Я Знаю, Что <Hightlight>Хорошее Разработке</Hightlight> Означает
          <Hightlight> Хороший Бизнес</Hightlight>
        </SectionTitle>
        <Cards>
          {aboutCards?.map((card, index) => (
            <Card
              key={`about-cards ${index}`}
              title={card.title}
              description={card.description}
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
