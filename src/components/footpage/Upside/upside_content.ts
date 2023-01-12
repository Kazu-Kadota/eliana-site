import { Content } from 'src/types/footpage'

const contents: Content[] = [
  {
    title: 'Eliana Pita',
    links: [
      {
        content: 'Sobre mim',
        url: '/sobre-mim',
      },
      {
        content: 'Livro',
        url: '/livro',
      },
    ],
  },
  {
    title: 'Fale Comigo',
    links: [
      {
        content: 'Contato',
        url: '/contato',
      },
    ],
  },
  {
    title: 'Para Pessoas',
    links: [
      {
        content: 'Cursos',
        url: '/cursos',
      },
      {
        content: 'Mentorias',
        url: '/mentorias',
      },
    ],
  },
  {
    title: 'Para Empresas',
    links: [
      {
        content: 'Palestras e treinamentos',
        url: '/palestras-e-treinamentos',
      },
      {
        content: 'Consultoria',
        url: '/consultoria',
      },
    ],
  },
]

export default contents
