import Image from 'next/image'
import styled from 'styled-components'
import { socialButtonsData } from '../../constants'

export const SocialButtons: React.FC = () => {
  return (
    <Container>
      {socialButtonsData.map((button, index) => (
        <Button href={button.link} key={`socialbutton-num-${index}`}>
          <Image src={button.icon} width={30} height={30} alt={button.title} />
        </Button>
      ))}
    </Container>
  )
}

const Button = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 40px #3d3b3b;
  transition: 300ms ease;

  &:hover {
    box-shadow: none;
  }
`

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  padding: 0em 0em 1em 1em;
  color: blue;
  bottom: 0;
  z-index: 5;
`
