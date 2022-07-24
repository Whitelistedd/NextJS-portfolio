import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Navbar } from '../src/component/Navbar/Navbar'
import { SideNav } from '../src/component/Navbar/SideNav/SideNav'
import { GlobalStyle } from '../src/GlobalStyles'
import { theme } from '../src/theme'

export const Layout: React.FC<any> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState('dark')

  const toggleTheme = () => {
    setSelectedTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme[`${selectedTheme}`]}>
      <Container>
        <Wrap>
          <SideNav />
          <Navbar SelectedTheme={selectedTheme} toggleTheme={toggleTheme} />
          <GlobalStyle />
          {children}
        </Wrap>
      </Container>
    </ThemeProvider>
  )
}

const Wrap = styled.div`
  max-width: 1920px;
  width: 100%;
`

const Container = styled.div`
  font-family: var(--font-base);
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  transition: 500ms ease;
  justify-content: center;
`
