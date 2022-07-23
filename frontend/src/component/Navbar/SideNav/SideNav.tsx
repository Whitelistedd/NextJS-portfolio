import styled from 'styled-components'
import { NavListItems } from '../Navbar'
import { SideNavProps } from '../Navbar.model'

export const SideNav: React.FC<SideNavProps> = ({ activeId }) => {
  return (
    <SideList>
      {NavListItems.map((item, index) => (
        <ListItem activeId={activeId} key={`${item} ${index++} `}>
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

const ListItem = styled.li<{ activeId: number }>`
  &:nth-child(${(props) => props.activeId}) {
    div {
      background-color: var(--secondary-font-color);
    }
  }
`

const SideList = styled.ul`
  list-style: none;
  padding: 0em 1em 3em 0em;
  right: 0;
  flex: 1;
  gap: 1em;
  display: flex;
  flex-direction: column;
  position: absolute;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`
