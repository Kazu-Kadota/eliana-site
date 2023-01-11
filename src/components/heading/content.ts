import { HeaderListContentType } from 'src/types/heading'

const headerList: HeaderListContentType[] = [
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
    subList: [
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
    subList: [
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
