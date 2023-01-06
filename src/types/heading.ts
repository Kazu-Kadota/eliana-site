export interface HeaderContent {
  title: string
  link: string
}

export interface HeaderListContent extends HeaderContent {
  sublist?: HeaderContent[]
}
