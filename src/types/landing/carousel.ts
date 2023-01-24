export interface Testimony {
  index: number
  last_name?: string
  message: string
  name: string
  stars?: number
}

export interface CarouselContent {
  color: string,
  testimonies: Testimony[]
}
