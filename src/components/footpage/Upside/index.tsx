import React from 'react'

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
            <a href={link.href} key={link.content}>{link.content}</a>
          ))}
        </ColumnContent>
      ))}
    </Upside>
  )
}
