import styled from 'styled-components'
import { useTypewriter } from 'react-simple-typewriter'
import { SideNav } from '../Navbar/SideNav/SideNav'

export const Header: React.FC = () => {
  const { text } = useTypewriter({
    words: [
      ' Full-stack разработчик.',
      ' Front-end разработчик.',
      ' Back-end разработчик.',
    ],
    loop: 0,
  })

  return (
    <Container id="Главная">
      <SideNav activeId={1} />
      <Wrap>
        <Title>ПРИВЕТ, МЕНЯ ЗОВУТ</Title>
        <Name>Мухамад.</Name>
        <Position>Я{text}</Position>
        <About>
          Мне нравится создавать красивые сайты для людей 🚀. В настоящее время
          я сосредоточен на изучении и освоении ReactJS, а также React Native в
          будущем.
        </About>
      </Wrap>
    </Container>
  )
}

const About = styled.p`
  font-size: 0.6em;
  font-weight: 200;
`

const Position = styled.div`
  color: var(--secondary-font-color);
  font-size: 1.7em;
  font-family: var(--font-secondary);
  font-weight: 900;
`

const Name = styled(Position)``

const Title = styled.h1`
  font-size: 0.6em;
  width: 100%;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`

const Container = styled.section`
  background-color: transparent;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0em 1em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--font-color);

  @media only screen and (max-width: 2000px) {
    font-size: 28px;
    ${Wrap} {
      width: 1000px;
    }
    ${Position} {
      font-size: 2.8em;
    }
  }

  @media only screen and (max-width: 1500px) {
    font-size: 25px;
    ${Wrap} {
      width: 900px;
    }
    ${Position} {
      font-size: 2.1em;
    }
  }

  @media only screen and (max-width: 1200px) {
    font-size: 25px;
    ${Wrap} {
      width: 700px;
    }
  }

  @media only screen and (max-width: 680px) {
    font-size: 16px;
    ${Wrap} {
      width: 400px;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`
