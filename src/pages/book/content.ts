import config from 'src/styles/config'
import photo_page_1 from 'src/assets/images/book/page-1.png'
import photo_page_2 from 'src/assets/images/book/page-2.png'
import { BasicPage } from 'src/types/basic-page'

const colors = config.theme.colors

const contents: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page_1,
    text: {
      p1: 'Você sabia que a falta de feedback é de longe a maior das queixas das pessoas, no mundo corportativo?   Em todos os segmentos de mercado, em todos os portes de empresa e em todos os níveis da estrutura.',
      p2: 'Isso acontece porque onde há comunicação de pessoas há ruídos, falhas e mal-entendidos, porém a maioria de nós não se sente preparado para dar e nem mesmo para receber feedback.',
      p3: 'Mas eu acredito que o feedback é a ferramenta mais direta, mais rápida, mais econômica e, quando bem utilizada, a mais efetiva para o desenvolvimento pessoal e profissional e dominar as técnicas de feedback é a maior das necessidades atuais, para todo aquele que queira evoluir em sua carreira.',
    },
  },
  {
    background_color: colors.base.background.color_1,
    image: photo_page_2,
    text: {
      p1: 'Por isso, reuni em meu livro, conceitos e técnicas importantes e também algumas histórias bem interessantes sobre “cases” de feedback que eu vivenciei.',
      p2: 'Já vendi mais de 3.000 cópias físicas do livro e treinei centenas de pessoas em técnicas de feedback você pode adquirir meu livro digital e ter acesso à um treinamento gratuito sobre feedback através do link abaixo.',
      p3: 'Quer aprender mais sobre feedback? Então aproveita que você já está por aqui e clica agora mesmo!',
    },
    link: {
      button: '#',
    }
  },
]

export default contents
