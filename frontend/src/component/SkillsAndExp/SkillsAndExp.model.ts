import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type ExpStateType = [
  {
    date: string
    details: Array<{
      title: string
      description: string
    }>
  }
]

export type skillsStateType = [
  {
    title: string
    link: string
    mainImage: SanityImageSource
  }
]

export interface SkillProps {
  ImageSRC: string
  title: string
  url: string
}

export interface ExpProps {
  date: string
  details: Array<{
    title: string
    description: string
  }>
}
