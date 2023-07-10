import { AboutMeCardProps } from '../About.model'
import styled from 'styled-components'

export const Card: React.FC<AboutMeCardProps> = ({ title, desc, image }) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </Container>
  )
}

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`

const Description = styled.p`
  font-size: 0.8em;
  color: grey;
`

const Title = styled.h3`
  font-size: 1em;
`

const Container = styled.div`
  width: 295px;
  min-height: 350px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: left;
  font-size: 20px;
  transition: 200ms ease;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 1000px) {
    font-size: 16px;
    width: 250px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 19px;
    width: 250px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    width: 230px;
  }
`
