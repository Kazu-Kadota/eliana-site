import React from 'react'

import DownsideRender from './downside'
import { Container } from './styles'
import UpsideRender from './upside'

const Footerpage = () => {
  return (
    <Container>
      <UpsideRender />
      <DownsideRender />
    </Container>
  )
}

export default Footerpage
