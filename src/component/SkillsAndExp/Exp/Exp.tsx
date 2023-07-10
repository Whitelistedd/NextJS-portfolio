import { ExpProps } from '../SkillsAndExp.model'
import styled from 'styled-components'

export const Exp: React.FC<ExpProps> = ({ year, details }) => {
  return (
    <Container>
      <Date>{year}</Date>
      <Details>
        {details?.map((detail, index) => (
          <Detail key={`Exp-detail-${index}`}>
            <Title>{detail.title}</Title>
            <Company>{detail.desc}</Company>
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
  text-align: left;
  color: ${({ theme }) => theme.primaryColor};
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
  width: 100%;
`
