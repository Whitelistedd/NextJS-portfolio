export interface CardProps {
  title: string
  description: string
  ImageSRC: {
    options: { baseUrl: string }
  }
}

export interface AboutCardsState extends CardProps {
  mainImage: { options: { baseUrl: string } }
}
