import config from '@/styles/config'
import { BasicPage } from '@/types/basic-page'
import photo_page_2 from 'public/assets/images/landing/photo-page-2.jpeg'
import photo_page_3 from 'public/assets/images/landing/photo-page-3.jpeg'
import photo_page_4 from 'public/assets/images/landing/photo-page-4.jpeg'

const colors = config.theme.colors

export const page_2: BasicPage = {
  background_color: colors.base.background.color_1,
  image: photo_page_2,
  index: 1,
  text: {
    h1: '+ de 30 anos cuidando de gente',
    p1: 'Há mais de 30 anos eu seleciono, contrato, capacito, treino e desenvolvo pessoas e pude comprovar a enorme capacidade do ser humano, para mudar, desenvolver-se e evoluir, desde que use as estratégias certas.',
  },
  link: {
    a: '/sobre-mim',
    content: 'Saiba mais',
  },
}

export const page_3: BasicPage = {
  background_color: colors.base.background.color_2,
  image: photo_page_3,
  index: 1,
  text: {
    h1: 'Diferentes segmentos, diferentes desafios e diferentes soluções',
    p1: 'Varejo, indústria e serviços. Conheça as marcas que já foram impulsionadas.',
  },
  link: {
    a: '/contato',
    content: 'Saiba mais',
  },
}

export const page_4: BasicPage = {
  background_color: colors.base.background.color_1,
  image: photo_page_4,
  index: 1,
  text: {
    h1: 'Como dizer? a arte de dar e receber Feedback',
    p1: 'Quer saber como já impactei a vida de mais de 3.000 pessoas, ensinando a ferramenta mais efetiva para o desenvolvimento pessoal e profissional? (Sugestão de título e texto)',
  },
  link: {
    button: '/livro',
    content: 'Saiba mais',
  },
}
