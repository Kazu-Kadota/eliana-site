import { HeaderListContent } from "src/types/heading"

const headerList: HeaderListContent[] = [
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
