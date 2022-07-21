export interface CardProps {
  title: string
  description: string
  ImageSRC: string
}

export interface AboutCardsState extends CardProps {
  mainImage: { options: { baseUrl: string } }
}
