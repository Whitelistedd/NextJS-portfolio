import { ChangeEvent, FormEvent, useRef, useState } from 'react'

import { SectionTitle } from '../SectionTitle/SectionTitle'
import { ThemeType } from '../../theme'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { t } = useTranslation('Contact')

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  const form = useRef<HTMLFormElement | null>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setLoading(true)
    const { user_name, user_email, message } = formData
    if (!user_name || !user_email || !message) {
      setError(t('errors.somethingIsNotFilled'))
      setLoading(false)
      return
    }

    if (message.length > 300) {
      setError(t('exceeds200Char'))
      setLoading(false)
      return
    }

    console.log(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICEID_KEY || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || '',
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID_KEY || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        () => {
          setFormSubmitted(true)
          setLoading(false)
        },
        () => {
          setError('Error sending form')
          setLoading(false)
        }
      )
  }

  return (
    <Container id="Contact">
      <SectionTitle>{t('title')}</SectionTitle>
      {!formSubmitted ? (
        <Form ref={form} onSubmit={handleFormSubmit}>
          <NameInput
            onChange={handleOnChange}
            value={formData.user_name}
            name="user_name"
            type="text"
            placeholder={t('name')}
          />
          <EmailInput
            onChange={handleOnChange}
            value={formData.user_email}
            name="user_email"
            type="email"
            placeholder={t('email')}
          />
          <MessageInput
            onChange={(e) => handleOnChange(e)}
            value={formData.message}
            name="message"
            placeholder={t('message')}
          />
          {error && <Error>{error}</Error>}
          <Submit type="submit">
            {loading ? t('status.loading') : t('send')}
          </Submit>
        </Form>
      ) : (
        <Submitted>{t('status.success')}</Submitted>
      )}
    </Container>
  )
}

const Error = styled.p`
  color: red;
  font-size: 0.7em;
`

const Submitted = styled.h3<{ theme: ThemeType }>`
  color: ${({ theme }) => theme.primaryColor};
`

const Submit = styled.button`
  padding: 1em 3em;
  background-color: var(--secondary-font-color);
  border: none;
  color: white;
  border-radius: 10px;
  font-size: 0.6em;
  transition: 300ms ease;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const EmailInput = styled.input`
  width: 50%;
  border: none;
  border-radius: 8px;
  background-color: #fefdfe;
  padding: 1.3em;
  font-size: 0.6em;
  min-width: 290px;
`

const NameInput = styled(EmailInput)``

const MessageInput = styled.textarea`
  background-color: #fefdfe;
  border: none;
  border-radius: 8px;
  height: 300px;
  font-family: inherit;
  width: 50%;
  min-width: 290px;
  font-size: 0.6em;
  padding: 1em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
`

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  min-height: 90vh;
  width: 100%;
  font-size: 25px;
  font-family: var(--font-secondary);

  @media only screen and (max-width: 680px) {
    font-size: 18px;
    ${Form} {
      font-size: 12px;
    }
    ${MessageInput} {
      height: 200px;
    }
  }
  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`
