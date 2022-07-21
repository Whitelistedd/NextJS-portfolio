export interface CardProps {
  title: string
  description: string
  projectLink: string
  projectCode: string
  tags: string[]
  ImageSRC: {
    options: { baseUrl: string }
  }
}

export interface ProjectsCardsState extends CardProps {
  mainImage: { options: { baseUrl: string } }
  animation: string
}
