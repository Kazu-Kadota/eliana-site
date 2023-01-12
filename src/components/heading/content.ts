import { HeaderListContentType } from 'src/types/heading'

const headerList: HeaderListContentType[] = [
  {
    title: 'Sobre mim',
    link: '/sobre-mim',
  },
  {
    title: 'Contato',
    link: '/contato',
  },
  {
    title: 'Livro',
    link: '/livro',
  },
  {
    title: 'Para Pessoas',
    link: '#',
    subList: [
      {
        title: 'Cursos',
        link: '/cursos',
      },
      {
        title: 'Mentorias',
        link: '/mentorias',
      }
    ]
  },
  {
    title: 'Para Empresas',
    link: '#',
    subList: [
      {
        title: 'Palestras e treinamentos',
        link: '/palestras-e-treinamentos',
      },
      {
        title: 'Consultoria',
        link: '/consultoria',
      }
    ]
  },
]

export default headerList
