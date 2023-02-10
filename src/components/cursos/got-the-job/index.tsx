import React from 'react'

import BasicPages from '@/components/common/basic-pages'
import contents from '@/contents/cursos/got-the-job/content'

import { Container } from './styles'

const GotTheJob: React.FC = () => {
  return (
  <Container>
    {contents.map((content) => (
      <BasicPages key={content.index} page_config={content} />
    ))}
  </Container>
  )
}

export default GotTheJob
