import styled from 'styled-components'
import { ExpProps } from '../SkillsAndExp.model'

export const Exp: React.FC<ExpProps> = ({ date, details }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Details>
        {details?.map((detail, index) => (
          <Detail key={`Exp-detail-${index}`}>
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

const Title = styled.p`
  font-size: 0.8em;
`

const Detail = styled.div``

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Date = styled.p`
  font-size: 0.8em;
  color: var(--secondary-font-color);
`

const Container = styled.div`
  display: flex;
  gap: 3em;
`
