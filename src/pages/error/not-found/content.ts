import config from 'src/styles/config'
import photo_page from 'src/assets/images/error/not-found/not-found.png'
import { BasicPage } from 'src/types/basic-page'

const colors = config.theme.colors

const content: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page,
    text: {
      h1: 'Página não encontrada'
    },
    link: {
      a: '/',
      content: 'Voltar ao início',
    }
  },
]

export default content
