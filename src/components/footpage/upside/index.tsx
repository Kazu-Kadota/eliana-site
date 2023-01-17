import React from 'react'
import { Link } from 'react-router-dom'

import contents from './upside_content'
import {
  ColumnContent,
  Upside
} from './styles'

export const UpsideRender = () => {
  return (
    <Upside>
      {contents.map((content) => (
        <ColumnContent key={content.title}>
          <h4>{content.title}</h4>
          {content.links.map((link) => (
            <Link to={link.url} key={link.content}>{link.content}</Link>
          ))}
        </ColumnContent>
      ))}
    </Upside>
  )
}
