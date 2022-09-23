import styled from 'styled-components'
import { useTypewriter } from 'react-simple-typewriter'
import useTranslation from 'next-translate/useTranslation'

export const Header: React.FC = () => {
  const { t } = useTranslation('Header')

  const { text } = useTypewriter({
    words: [
      t('position.fullstack'),
      t('position.frontend'),
      t('position.backend'),
    ],
    loop: 0,
  })

  return (
    <Container id="Главная">
      <Wrap>
        <Title>{t('title')}</Title>
        <Name>{t('name')}.</Name>
        <Position>
          {t('me')}
          {text}
        </Position>
        <About>{t('about')}</About>
      </Wrap>
    </Container>
  )
}

const About = styled.p`
  font-size: 0.6em;
  font-weight: 200;
`

const Position = styled.div`
  color: ${({ theme }) => theme.secondaryColor};
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
  margin-top: 70px;
  padding: 0em 1em;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ theme }) => theme.primaryColor};

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
