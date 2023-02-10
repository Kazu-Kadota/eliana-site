import React from 'react'

import BasicPages from '@/components/common/basic-pages'
import contents from '@/contents/error/404/content'

import Container from './styles'

const NotFoundError: React.FC = () => {
  return (
  <Container>
    {contents.map((content) => (
      <BasicPages key={content.index} page_config={content} />
    ))}
  </Container>
  )
}

export default NotFoundError
