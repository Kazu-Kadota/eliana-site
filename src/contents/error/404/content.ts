import config from '@/styles/config'
import { BasicPage } from '@/types/basic-page'
import photo_page from 'public/assets/images/error/not-found/not-found.png'

const colors = config.theme.colors

const content: BasicPage[] = [
  {
    background_color: colors.base.background.color_2,
    image: photo_page,
    index: 1,
    text: {
      h1: 'Página não encontrada',
    },
    link: {
      a: '/',
      content: 'Voltar ao início',
    },
  },
]

export default content
