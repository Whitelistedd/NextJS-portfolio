import styled from 'styled-components'
import { Navbar } from '../src/component/Navbar/Navbar'
import { GlobalStyle } from '../src/GlobalStyles'

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <GlobalStyle />
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-family: var(--font-base);
  background-color: #edf2f8;
`
