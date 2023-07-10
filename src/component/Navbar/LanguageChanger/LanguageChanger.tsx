import Image from 'next/image'
import { LanguageChangerProps } from '../Navbar.model'
import RuFlag from 'public/assets/images/ru.svg'
import UsFlag from 'public/assets/images/us.svg'
import setLanguage from 'next-translate/setLanguage'
import styled from 'styled-components'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

export const LanguageChanger: React.FC<LanguageChangerProps> = ({
  className,
}) => {
  const { lang } = useTranslation()
  const [currentLang, setCurrentLang] = useState('')

  const toggleLanguage = () => {
    setLanguage(lang === 'ru' ? 'en' : 'ru')
    setCurrentLang(lang === 'ru' ? 'en' : 'ru')
  }

  return (
    <Container className={className}>
      <StyledImage
        onClick={() => toggleLanguage()}
        src={lang === 'ru' ? RuFlag : UsFlag}
        width={30}
        height={30}
      />
    </Container>
  )
}

const StyledImage = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  width: 27.016px;
  height: 27.016px;
`
