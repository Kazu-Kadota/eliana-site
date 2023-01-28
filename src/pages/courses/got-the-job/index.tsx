import React from 'react'

import BasicPages from 'src/components/common/basic-pages'

import contents from './content'
import { Container } from './styles'

const GotTheJob: React.FC = () => {
  return (
  <Container>
    {contents.map((content) => (
      <BasicPages key={content.image} page_config={content} />
    ))}
  </Container>
  )
}

export default GotTheJob
