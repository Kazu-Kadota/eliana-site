import photo_page_5_1 from 'src/assets/images/landing/Photo_Page_5_1.jpeg'
import photo_page_5_2 from 'src/assets/images/landing/Photo_Page_5_2.jpeg'
import photo_page_5_3 from 'src/assets/images/landing/Photo_Page_5_3.jpeg'
import { PhotoColectionContent } from 'src/types/landing/photo_colection'

export const photo_colection_content: PhotoColectionContent[] = [
  {
    image: photo_page_5_1,
    content: 'Mentoria de Carreira',
    url: '/mentorias'
  },
  {
    image: photo_page_5_2,
    content: 'Palestras e treinamentos',
    url: '/palestras-e-treinamentos'
  },
  {
    image: photo_page_5_3,
    content: 'Cursos online',
    url: '/cursos'
  },
]
