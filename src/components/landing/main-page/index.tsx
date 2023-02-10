import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import photo_main_page from 'public/assets/images/landing/photo-main-page.png'

import {
  MainBox,
  MainPage,
} from './styles'


const MainPageRender: React.FC = () => {
  return (
    <MainPage>
      <Image src={photo_main_page} alt='main photo' priority={true}/>
      <MainBox>
        <h1>O impulso que a sua carreira e sua equipe precisam</h1>
        <h3>Veja como acelerar sua carreira e de sua equipe e atingir
          resultados mais rápido.
        </h3>
        <Link href='/contato'>
          <button>
            <h3>Quero decolar</h3>
          </button>
        </Link>
      </MainBox>
    </MainPage>
  )
}

export default MainPageRender
