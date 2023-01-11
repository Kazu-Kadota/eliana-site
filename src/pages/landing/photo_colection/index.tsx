import React from 'react'

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
            <ImagesBlock src={block.image} />
            <TextBlock>{block.content}</TextBlock>
          </ContentBlock>
        ))}
      </PhotoWrapper>
      <a href="#">Quero conhecer todas as formas de me impulsionar</a>
    </PhotoColection>
  )
}
