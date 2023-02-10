import { PhotoColectionContent } from '@/types/landing/photo-colection'
import photo_page_5_1 from 'public/assets/images/landing/photo-page-5-1.jpeg'
import photo_page_5_2 from 'public/assets/images/landing/photo-page-5-2.jpeg'
import photo_page_5_3 from 'public/assets/images/landing/photo-page-5-3.jpeg'

export const photo_colection_content: PhotoColectionContent[] = [
  {
    image: photo_page_5_1,
    content: 'Mentoria de Carreira',
    url: '/mentorias',
  },
  {
    image: photo_page_5_2,
    content: 'Palestras e treinamentos',
    url: '/palestras-e-treinamentos',
  },
  {
    image: photo_page_5_3,
    content: 'Cursos online',
    url: '/cursos',
  },
]
