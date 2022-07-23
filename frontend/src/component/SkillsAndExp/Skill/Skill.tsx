import styled from 'styled-components'
import Image from 'next/image'
import { SkillProps } from '../SkillsAndExp.model'

export const Skill: React.FC<SkillProps> = ({ ImageSRC, title, url }) => {
  return (
    <Anchor href={url}>
      <SkillsImage width={100} height={100} alt={title} src={ImageSRC} />
      <Title>{title}</Title>
    </Anchor>
  )
}

const Title = styled.p`
  font-size: 0.5em;
`

const SkillsImage = styled(Image)`
  background: #fefdfe;
  padding: 20px !important;
  transition: 400ms ease;

  &:hover {
    background-color: var(--secondary-font-color);
  }
`

const Anchor = styled.a`
  color: var(--font-color);
  text-decoration: none;

  span {
    border-radius: 50%;
  }
`
