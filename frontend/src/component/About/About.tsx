import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { client } from '../../SanityClient'
import { SideNav } from '../Navbar/SideNav/SideNav'
import { AboutCardsState } from './About.model'
import { Card } from './Card/Card'

export const About: React.FC = () => {
  const [aboutCards, setAboutCards] = useState<AboutCardsState[]>([])

  useEffect(() => {
    const getAllAboutCards = () => {
      const query = '*[_type == "about"]'

      client.fetch(query).then((data) => setAboutCards(data))
    }
    getAllAboutCards()
  }, [])

  return (
    <Container id="Обо мне">
      <SideNav activeId={2} />
      <Wrap>
        <Title>
          Я Знаю, Что <Hightlight>Хорошее Разработке</Hightlight> Означает
          <Hightlight> Хороший Бизнес</Hightlight>
        </Title>
        <Cards>
          {aboutCards?.map((card, index) => (
            <Card
              key={`about-cards ${index}`}
              title={card.title}
              description={card.description}
              ImageSRC={card.mainImage}
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

export const Hightlight = styled.span`
  color: var(--secondary-font-color);
  font-size: 1em;
`

const Title = styled.h2`
  width: 600px;
`

const Wrap = styled.div`
  display: flex;
  gap: 2em;
  text-align: center;
  flex-direction: column;
  align-items: center;
`

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  color: var(--font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;

  @media only screen and (max-width: 2000px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1000px) {
    ${Title} {
      width: 550px;
    }
    font-size: 20px;
  }

  @media only screen and (max-width: 680px) {
    ${Title} {
      width: 450px;
    }
    font-size: 17px;
  }
`
