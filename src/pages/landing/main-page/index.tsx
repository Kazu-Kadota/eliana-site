import React from 'react'
import { useNavigate } from 'react-router-dom'

import photo_main_page from 'src/assets/images/landing/photo-main-page.png'

import {
  MainBox,
  MainPage
} from './styles'


export const MainPageRender: React.FC = () => {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate('/contato')
  }

  return (
    <MainPage>
      <img src={photo_main_page} />
      <MainBox>
        <h1>O impulso que a sua carreira e sua equipe precisam</h1>
        <h3>Veja como acelerar sua carreira e de sua equipe e atingir
          resultados mais rápido.
        </h3>
        <button onClick={goToContact}>
          <h3>Quero decolar</h3>
        </button>
      </MainBox>
    </MainPage>
  )
}
