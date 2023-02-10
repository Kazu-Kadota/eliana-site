import config from '@/styles/config'
import { BasicPage } from '@/types/basic-page'
import photo_page_1 from 'public/assets/images/courses/find-your-forces/page-1.png'
import photo_page_2 from 'public/assets/images/courses/find-your-forces/page-2.png'
import photo_page_3 from 'public/assets/images/courses/find-your-forces/page-3.png'
import photo_page_4 from 'public/assets/images/courses/find-your-forces/page-4.png'


const colors = config.theme.colors

const content: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page_1,
    index: 1,
    priority: true,
    text: {
      h1: 'Descubra suas forças',
      p1: 'Estar onde você não deveria, fazendo o que você não gostaria, com pessoas que não te agradam, pode te levar a acreditar que você é um péssimo profissional, que não é bom o suficiente, que não tem talentos que podem te diferenciar e fazer de você um profissional, realizado, feliz e reconhecido...',
      p2: 'Não acredite nisso: é somente falta de autoconhecimento!',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_2,
    index: 2,
    text: {
      p1: 'Se você está insatisfeito, infeliz ou perdido em sua carreira.',
      p2: 'Se você está começando sua jornada profissional e ainda não sabe muito bem como direcionar seus esforços.',
      p3: 'Se a toda hora você sente o peso de pensamentos que vêm à sua mente, lhe incomodando com a ideia de que você poderia isso, você deveria aquilo, você precisaria aquilo outro...',
      p4: 'Se você sente que precisa fazer alguma coisa e mudar o rumo da sua carreira, mas não sabe por onde começar, comece descobrindo suas forças.',
    },
  },
  {
    background_color: colors.base.background.color_2,
    image: photo_page_3,
    index: 3,
    text: {
      p1: 'Pare de tentar melhorar suas fraquezas e comece a potencializar suas forças! Isso é o que eu chamo de esforço inteligente, porque é o que vai te trazer resultado mais rápido.',
      p2: 'Quando você sabe em que você é bom e como pode fazer uso das suas forças para gerar resultados, fica muito mais fácil traçar uma rota de carreira.',
      p3: 'Se você quer fazer isso de forma, segura, leve e rápida, me acompanhe nesse curso, em que eu te ensino o passo a passo para descobrir as suas forças.',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_4,
    index: 4,
    text: {
      p2: 'Pare de perder tempo e livre-se do peso de pensamentos recorrentes de insatisfação e frustração, por não estar fazendo nada por sua carreira. Pare de pensar em tudo o que você poderia ou deveria e comece agora mesmo a agir, usando a estratégia certa.',
    },
    link: {
      button: '/',
      content: 'Descobrir minhas forças!',
    },
  },
]

export default content
