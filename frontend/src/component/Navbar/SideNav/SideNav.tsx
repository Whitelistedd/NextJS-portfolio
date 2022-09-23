import { NavListItems } from '../Navbar'
import styled from 'styled-components'

export const SideNav: React.FC = () => {
  return (
    <SideList>
      {NavListItems.map((item, index) => (
        <ListItem key={`${item} ${index++} `}>
          <Anchor href={`#${item}`}>
            <Circle></Circle>
          </Anchor>
        </ListItem>
      ))}
    </SideList>
  )
}

const Anchor = styled.a`
  width: 50px;
  background-color: var(--font-secondary-color);
  height: 50px;
`

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #c6c9d0;

  &:hover {
    cursor: pointer;
  }
`

const ListItem = styled.li``

const SideList = styled.ul`
  list-style: none;
  padding: 0em 1em 0em 0em;
  right: 0;
  flex: 1;
  gap: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  top: 50;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`
