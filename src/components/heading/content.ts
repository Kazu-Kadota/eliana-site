export interface HeaderContent {
  title: string
  link: string
}

export interface HeaderListContent extends HeaderContent {
  sublist?: HeaderContent[]
}

const headerList = [
  {
    title: 'Sobre mim',
    link: '#',
  },
  {
    title: 'Contato',
    link: '#',
  },
  {
    title: 'Livro',
    link: '#',
  },
  {
    title: 'Para Pessoas',
    link: '#',
    sublist: [
      {
        title: 'Cursos',
        link: '#',
      },
      {
        title: 'Mentorias',
        link: '#',
      }
    ]
  },
  {
    title: 'Para Empresas',
    link: '#',
    sublist: [
      {
        title: 'Palestras e treinamentos',
        link: '#',
      },
      {
        title: 'Consultoria',
        link: '#',
      }
    ]
  },
]

export default headerList
