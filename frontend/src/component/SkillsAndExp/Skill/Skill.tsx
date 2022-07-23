import styled from 'styled-components'
import Image from 'next/image'
import { SkillProps } from '../SkillsAndExp.model'

export const Skill: React.FC<SkillProps> = ({ ImageSRC, title, url }) => {
  return (
    <Anchor target="_blank" href={url}>
      <ImageWrap>
        <SkillsImage
          layout="responsive"
          width={100}
          height={100}
          alt={title}
          src={ImageSRC}
        />
      </ImageWrap>
      <Title>{title}</Title>
    </Anchor>
  )
}

const Title = styled.p`
  margin-top: 10px;
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

const ImageWrap = styled.div`
  width: 100px;
`

const Anchor = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;

  span {
    border-radius: 50%;
  }

  @media only screen and (max-width: 680px) {
    font-size: 13px;
    ${SkillsImage} {
      padding: 10px !important;
    }
    ${ImageWrap} {
      width: 48px;
    }
  }
`
