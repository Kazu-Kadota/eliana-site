import React from 'react'

import { DownsideRender } from './downside'
import { UpsideRender } from './upside'
import {
  Container,
} from './styles'

export const Footerpage = () => {
  return (
    <Container>
      <UpsideRender />
      <DownsideRender />
    </Container>
  )
}
