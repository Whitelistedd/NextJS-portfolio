import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { CardProps } from '../Projects.model'

export const Card: React.FC<CardProps> = ({
  title,
  description,
  ImageSRC,
  projectLink,
  projectCode,
  tags,
  animation,
}) => {
  return (
    <Container>
      <Wrap animation={animation}>
        <ImageWrap>
          <Overlay>
            <Anchor target="_blank" href={projectLink}>
              <OverlayImage
                width={50}
                height={50}
                src={'/assets/images/eye.svg'}
                alt="eye"
              />
            </Anchor>
            <Anchor target="_blank" href={projectCode}>
              <OverlayImage
                width={50}
                height={50}
                src={'/assets/images/github.svg'}
                alt="eye"
              />
            </Anchor>
          </Overlay>
          <ProjectImage src={ImageSRC} alt={title} />
          <Tag>{tags[0]}</Tag>
        </ImageWrap>
        <About>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </About>
      </Wrap>
    </Container>
  )
}

const ProjectImage = styled.img`
  width: 100%;
  height: 182px;
  object-fit: cover;
  background-color: aliceblue;
  object-position: top;
  border-radius: 10px;
  border: 1px solid #000000;
`

const OverlayImage = styled(Image)`
  background: #000000a6;
  padding: 10px !important;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    transform: scale(0.7);
  }
`

const Anchor = styled.a``

const Overlay = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  align-items: center;
  justify-content: center;
  gap: 1em;
  background-color: #00000096;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  color: white;
`

const ImageWrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`

const Tag = styled.p`
  position: absolute;
  bottom: 0px;
  background-color: #f0f4f9;
  padding: 7px;
  border-radius: 10px 10px 0px 0px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  font-size: 0.8em;
`

const Description = styled.p`
  font-size: 0.8em;
  color: grey;
`

const Title = styled.h3`
  font-size: 1em;
`

const About = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0%;
  overflow: hidden;
  opacity: 0;
  transition: 400ms ease-in;
  transition-delay: 400ms;
`

const FadeDown = keyframes`
0% {
  opacity: 1;
  transform: translateY(0px);
}
100% {
  opacity: 0;
  transform: translateY(100px);
}
`

const FadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const Wrap = styled.div<{ animation: string }>`
  width: 375px;
  max-height: 182px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  text-align: center;
  font-size: 20px;
  transition: 400ms ease;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0px 8px 32px 0 rgb(0, 0, 0, 0.37);
  animation: 520ms linear
    ${(props) => (props.animation === 'fadeUp' ? FadeUp : FadeDown)};

  &:hover {
    max-height: 603px;
    padding: 1em;
    ${About} {
      opacity: 1;
      height: 100%;
      overflow: visible;
    }
  }

  @media only screen and (max-width: 680px) {
    width: 300px;
  }
`

const Container = styled.div`
  height: 296px;
`
