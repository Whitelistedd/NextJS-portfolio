import styled from 'styled-components'

export const SectionTitle = styled.h2`
  font-size: 50px;
  text-align: center;
  width: 900px;

  @media only screen and (max-width: 1000px) {
    font-size: 35px;
    width: 600px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 19px;
    width: 300px;
  }
`

export const Hightlight = styled.span`
  color: var(--secondary-font-color);
  font-size: 1em;
`
