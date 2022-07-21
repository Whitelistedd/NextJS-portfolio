export interface CardProps {
  title: string
  description: string
  projectLink: string
  projectCode: string
  tags: string[]
  animation: string
  ImageSRC: string
}

export interface ProjectsCardsState extends CardProps {
  mainImage: { options: { baseUrl: string } }
}
