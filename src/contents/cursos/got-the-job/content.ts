import config from '@/styles/config'
import { BasicPage } from '@/types/basic-page'
import photo_page_1 from 'public/assets/images/courses/got-the-job/page-1.png'
import photo_page_2 from 'public/assets/images/courses/got-the-job/page-2.png'
import photo_page_3 from 'public/assets/images/courses/got-the-job/page-3.png'
import photo_page_4 from 'public/assets/images/courses/got-the-job/page-4.png'
import photo_page_5 from 'public/assets/images/courses/got-the-job/page-5.png'

const colors = config.theme.colors

const content: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page_1,
    index: 1,
    text: {
      h1: 'Passei na entrevista!',
      p1: 'Uma boa entrevista salva um curriculum mais ou menos, mas uma entrevista ruim não salva um bom curriculum.',
      p2: 'Chegar na etapa da entrevista em um processo seletivo é como passar por um funil, você concorre com muita gente, que você não conhece, não sabe quem é e não tem nenhum controle sobre o processo ou sobre as etapas que antecedem a entrevista.',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_2,
    index: 2,
    text: {
      p1: 'Então se você chegou à entrevista é porque tem um  currículo valioso e sua experiência, formação e conhecimentos te colocaram onde você está.',
      p2: 'No entanto, muitos candidatos que atraem os recrutadores pelo seu currículo e linkedin, são reprovados na entrevista.',
      p3: 'Isso acontece porque não basta ser bom, você tem que parecer bom. E muitos candidatos, mesmo sendo bons, não conseguem demonstrar isso na entrevista.',
    },
  },
  {
    background_color: colors.base.background.color_2,
    image: photo_page_3,
    index: 3,
    text: {
      p1: 'Não se trata de “dar as respostas corretas”, mas sim de mostrar da maneira estratégica aquilo que você é e que você tem para oferecer.',
      p2: 'E sim, o mercado é concorrido e independentemente de você concordar ou não com isso, achar ou não que isso seja  justo, a verdade é que serão contratados aqueles que se saírem melhor nas entrevistas.',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_4,
    index: 4,
    text: {
      p1: 'Se você quer aprender como demonstrar os seus talentos e habilidades e se posicionar de forma estratégica nas entrevistas, vem comigo que eu vou te ensinar.',
      p2: 'Neste curso on line eu te ensino como “pensar com a cabeça” do recrutador e entender como você deve responder às perguntas para que ele perceba todo o seu diferencial como candidato e queira te contratar.',
    },
  },
  {
    background_color: colors.base.background.color_2,
    image: photo_page_5,
    index: 5,
    text: {
      p2: 'Quer poder dizer: “passei na entrevista”? Vem aprender comigo, clica aqui e borá!',
      p3: 'E você ainda ganha um bônus super especial, meu curso on line Descubra suas forças, que vai te ajudar a ampliar seu auto-conhecimento e se sentir confiante e empoderado, para a entrevista.',
    },
    link: {
      button: '/',
      content: 'Passar na entrevista!',
    },
  },
]

export default content
