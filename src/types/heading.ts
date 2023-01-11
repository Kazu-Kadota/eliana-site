export interface HeaderContent {
  title: string
  link: string
}

export interface HeaderListContentType extends HeaderContent {
  subList?: HeaderContent[]
}
