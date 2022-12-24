import React from 'react'

import { Container, Content, Picture } from './styles'
import photo_1 from '../../assets/images/landing/Photo_1_With_Blur.png'


export const Landing = () => {
  return (
    <Container>
      <Picture>
        <img src={photo_1}></img>
      </Picture>
      <Content>
        <h1>
          O IMPULSO QUE A SUA CARREIRA PRECISA
        </h1>
      </Content>
    </Container>
  )
}
