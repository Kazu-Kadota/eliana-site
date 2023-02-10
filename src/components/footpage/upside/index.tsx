import Link from 'next/link'
import React from 'react'

import contents from '@/contents/footpage/upside_content'

import {
  ColumnContent,
  Upside,
} from './styles'

const UpsideRender = () => {
  return (
    <Upside>
      {contents.map((content) => (
        <ColumnContent key={content.title}>
          <h4>{content.title}</h4>
          {content.links.map((link) => (
            <Link href={link.url} key={link.content}>{link.content}</Link>
          ))}
        </ColumnContent>
      ))}
    </Upside>
  )
}

export default UpsideRender
