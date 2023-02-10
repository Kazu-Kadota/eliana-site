import config from '@/styles/config'
import { BasicPage } from '@/types/basic-page'
import photo_page_1 from 'public/assets/images/about-me/page-1.png'
import photo_page_2 from 'public/assets/images/about-me/page-2.png'

const colors = config.theme.colors

const content: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page_1,
    index: 1,
    text: {
      p1: '- Meu propósito é ajudar pessoas e empresas a encurtar o caminho na busca dos resultados.',
      p2: '- Há mais de 30 anos eu seleciono, contrato, capacito, treino e desenvolvo pessoas e  pude comprovar a enorme capacidade do ser humano, para mudar, desenvolver-se e evoluir, desde que use as estratégias certas.',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_2,
    index: 2,
    text: {
      p1: 'Eu trabalho para acelerar a sua carreira e recolocação, direcionando suas forças, talentos, foco e energia de maneira estratégica.',
      p2: 'Faço isso através de uma curadoria das melhores estratégias de carreira e desenvolvimento pessoal, para te ajudar a chegar mais rápido onde você deseja.',
    },
    link: {
      button: '/mentorias',
      content: 'Bora trabalhar juntos?',
    },
  },
]

export default content
