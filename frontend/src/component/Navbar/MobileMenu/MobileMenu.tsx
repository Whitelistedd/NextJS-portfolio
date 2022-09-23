import Image from 'next/image'
import { LanguageChanger } from '../LanguageChanger/LanguageChanger'
import { MobileMenuProps } from '../Navbar.model'
import { NavListItems } from '../Navbar'
import styled from 'styled-components'

export const MobileMenu: React.FC<MobileMenuProps> = ({
  showMenu,
  toggleMobileMenu,
  t,
}) => {
  return (
    <>
      <Container
        onClick={() => toggleMobileMenu()}
        showMenu={showMenu}
      ></Container>
      <Wrap showMenu={showMenu}>
        <Top>
          <LanguageChanger />
          <Close onClick={() => toggleMobileMenu()}>
            <Image
              src={'/assets/images/close.svg'}
              width={24}
              height={24}
              alt="Close"
            />
          </Close>
        </Top>
        <NavList>
          {NavListItems.map((item) => (
            <Anchor href={`#${item}`} key={`mobile-menu-item- ${item}`}>
              <ListItem>{t(item)}</ListItem>
            </Anchor>
          ))}
        </NavList>
      </Wrap>
    </>
  )
}

const Anchor = styled.a`
  transition: 500ms ease;
  text-decoration: none;
  color: grey;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`

const ListItem = styled.li`
  font-size: 1.5em;
  transition: 300ms ease;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 6em 0em 0em 2em;
  flex-direction: column;
  height: 100%;
  gap: 2em;
  margin-right: auto;
`

const Close = styled.div`
  align-self: flex-end;
  span {
    transition: 1s ease;
  }
  &:hover {
    span {
      transform: rotate(360deg);
    }
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    display: none;
  }
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em 1.4em 0em 1.4em;
`

const Wrap = styled.div<{ showMenu: boolean }>`
  width: ${(props) => (props.showMenu ? '300px' : '0px')};
  height: 100%;
  transition: 200ms ease;
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  z-index: 2;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
`

const Container = styled.div<{ showMenu: boolean }>`
  position: fixed;
  width: ${(props) => (props.showMenu ? '100%' : '0%')};
  display: flex;
  z-index: 1;
  height: 100%;
  top: 0;
  transition: 200ms ease;
  background-color: transparent;
`
