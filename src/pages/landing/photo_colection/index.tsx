import React from 'react'
import { Link } from 'react-router-dom'

import config from 'src/styles/config'
import { photo_colection_content } from 'src/pages/landing/content_pages/photo_colection'

import {
  ContentBlock,
  ImagesBlock,
  PhotoColection,
  PhotoWrapper,
  TextBlock,
} from './styles'

const colors = config.theme.colors

export const PhotoColectionRender: React.FC = () => {
  return (
    <PhotoColection color={colors.base.background.color_2}>
      <h1>Como eu te impulsiono</h1>
      <PhotoWrapper>
        {photo_colection_content.map((block) => (
          <ContentBlock key={block.image}>
            <Link to={block.url}>
              <ImagesBlock src={block.image} />
              <TextBlock>{block.content}</TextBlock>
            </Link>
          </ContentBlock>
        ))}
      </PhotoWrapper>
      <Link to='/contato'>Quero conhecer todas as formas de me impulsionar</Link>
    </PhotoColection>
  )
}
