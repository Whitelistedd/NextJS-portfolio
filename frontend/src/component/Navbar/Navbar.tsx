import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { MobileMenu } from './MobileMenu/MobileMenu'

export const NavListItems = [
  'Главная',
  'Обо мне',
  'Проекты',
  'Навыки',
  'Контакт',
]

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMenu((prev) => (prev ? false : true))
  }

  return (
    <Container>
      <MenuIconWrap>
        <MenuIcon
          onClick={() => toggleMobileMenu()}
          src={'/assets/images/menu.svg'}
          alt="Menu"
          width={30}
          height={30}
        />
      </MenuIconWrap>
      <MobileMenu toggleMobileMenu={toggleMobileMenu} showMenu={showMenu} />
      <NavList>
        {NavListItems.map((item) => (
          <ListItem key={item}>
            <Anchor href={`#${item}`}>{item}</Anchor>
          </ListItem>
        ))}
      </NavList>
    </Container>
  )
}

const ListItem = styled.li``

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  width: 100%;
`

const MenuIcon = styled(Image)`
  cursor: pointer;
  transition: 1s ease;
  &:hover {
    transform: rotate(360deg);
  }
`

const MenuIconWrap = styled.div``

const Container = styled.nav`
  display: flex;
  width: 100%;
  font-family: roboto;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  padding: 1em;
  height: 70px;
  z-index: 5;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background: #edf2f8;
  font-family: var(--font-secondary);
  color: grey;

  @media only screen and (max-width: 800px) {
    ${NavList} {
      display: none;
    }
    ${MenuIcon} {
      display: block;
    }
  }

  @media only screen and (min-width: 800px) {
    ${NavList} {
      display: flex;
    }
    ${MenuIconWrap} {
      display: none !important;
    }
  }
`
