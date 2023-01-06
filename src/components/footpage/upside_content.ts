export interface Links {
  content: string
  href: string
}

export interface Content {
  title: string
  links: Links[]
}

const contents: Content[] = [
  {
    title: 'Eliana Pita',
    links: [
      {
        content: 'Sobre mim',
        href: '#',
      },
      {
        content: 'Livro',
        href: '#',
      },
    ],
  },
  {
    title: 'Fale Comigo',
    links: [
      {
        content: 'Contato',
        href: '#',
      },
    ],
  },
  {
    title: 'Para Pessoas',
    links: [
      {
        content: 'Cursos',
        href: '#',
      },
      {
        content: 'Mentorias',
        href: '#',
      },
    ],
  },
  {
    title: 'Para Empresas',
    links: [
      {
        content: 'Palestras e treinamentos',
        href: '#',
      },
      {
        content: 'Consultoria',
        href: '#',
      },
    ],
  },
]

export default contents
