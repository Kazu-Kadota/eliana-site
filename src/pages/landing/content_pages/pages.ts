import photo_page_2 from 'src/assets/images/landing/Photo_Page_2.jpeg'
import photo_page_3 from 'src/assets/images/landing/Photo_Page_3.jpeg'
import photo_page_4 from 'src/assets/images/landing/Photo_Page_4.jpeg'
import { BasicPage } from 'src/types/basic_page'
import config from 'src/styles/config'

const colors = config.theme.colors

export const page_2: BasicPage = {
  background_color: colors.base.background.color_1,
  image: photo_page_2,
  text: {
    h1: '+ de 30 anos cuidando de gente',
    h3: 'Há mais de 30 anos eu seleciono, contrato, capacito, treino e desenvolvo pessoas e pude comprovar a enorme capacidade do ser humano, para mudar, desenvolver-se e evoluir, desde que use as estratégias certas.'
  },
  variation: {
    a: '/sobre-mim',
  }
}

export const page_3: BasicPage = {
  background_color: colors.base.background.color_2,
  image: photo_page_3,
  text: {
    h1: 'Diferentes segmentos, diferentes desafios e diferentes soluções',
    h3: 'Varejo, indústria e serviços. Conheça as marcas que já foram impulsionadas.'
  },
  variation: {
    a: '/contato',
  }
}

export const page_4: BasicPage = {
  background_color: colors.base.background.color_1,
  image: photo_page_4,
  text: {
    h1: 'Como dizer? a arte de dar e receber Feedback',
    h3: 'Quer saber como já impactei a vida de mais de 3.000 pessoas, ensinando a ferramenta mais efetiva para o desenvolvimento pessoal e profissional? (Sugestão de título e texto)'
  },
  variation: {
    button: '/livro',
  }
}
