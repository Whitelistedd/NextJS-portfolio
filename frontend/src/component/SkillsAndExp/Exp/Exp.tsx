import styled from 'styled-components'
import { ExpProps } from '../SkillsAndExp.model'

export const Exp: React.FC<ExpProps> = ({ date, details }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Details>
        {details?.map((detail) => (
          <Detail>
            <Title>{detail.title}</Title>
            <Company>{detail.description}</Company>
          </Detail>
        ))}
      </Details>
    </Container>
  )
}

const Company = styled.p`
  font-size: 0.6em;
  text-align: left;
  color: grey;
`

const Title = styled.p``

const Detail = styled.div``

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Date = styled.p`
  color: var(--secondary-font-color);
`

const Container = styled.div`
  display: flex;
  gap: 1em;
`
