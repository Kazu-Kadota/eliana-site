export interface TextTypes {
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  p: string
}

export interface PageVariation {
  a: string
  button: string
}

export interface BasicPage {
  background_color: string
  image: string
  text: Partial<TextTypes>
  variation: Partial<PageVariation>
}

export interface PhotoColectionContent {
  image: string
  content: string
}
