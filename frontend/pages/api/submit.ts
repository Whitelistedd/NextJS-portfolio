import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-07-20',
  token: process.env.SANITY_CREATE_TOKEN,
  useCdn: true,
})

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  if (req.method !== 'POST') return

  console.log(req.body)

  const responseBody = req.body

  const { name, email, message } = responseBody

  const contact = {
    _type: 'contact',
    name: name,
    email: email,
    message: message,
  }

  client
    .create(contact)
    .then(() => {
      res.status(200).json({ message: 'successfully submitted' })
    })
    .catch(() => res.status(500).json({ message: 'something went wrong' }))
}
