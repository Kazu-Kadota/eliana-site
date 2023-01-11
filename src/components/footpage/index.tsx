import React from 'react'

import { DownsideRender } from './Downside'
import { UpsideRender } from './Upside'
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
