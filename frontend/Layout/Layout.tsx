import styled from 'styled-components'
import { Navbar } from '../src/component/Navbar/Navbar'
import { GlobalStyle } from '../src/GlobalStyles'

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <Wrap>
        <Navbar />
        <GlobalStyle />
        {children}
      </Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  max-width: 1920px;
  width: 100%;
`

const Container = styled.div`
  font-family: var(--font-base);
  background-color: #edf2f8;
  display: flex;
  align-items: center;
  justify-content: center;
`
