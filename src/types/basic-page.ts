import { StaticImageData } from 'next/image'

export interface TextTypes {
  h1: string
  p1: string
  p2: string
  p3: string
  p4: string
  p5: string
}

export interface PageLink {
  a: string
  button: string
  external: boolean
  content: string
}

export interface BasicPage {
  background_color: string
  image?: StaticImageData
  index: string | number
  link?: Partial<PageLink>
  priority?: boolean
  text?: Partial<TextTypes>
}

export interface PhotoColectionContent {
  image: string
  content: string
}
