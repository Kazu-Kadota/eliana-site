import Link from 'next/link'
import React from 'react'

import { photo_colection_content } from '@/contents/landing/content-pages/photo-colection'
import config from '@/styles/config'

import {
  ContentBlock,
  ImagesBlock,
  PhotoColection,
  PhotoWrapper,
  TextBlock,
} from './styles'

const colors = config.theme.colors

const PhotoColectionRender: React.FC = () => {
  return (
    <PhotoColection color={colors.base.background.color_2}>
      <h1>Como eu te impulsiono</h1>
      <PhotoWrapper>
        {photo_colection_content.map((block) => (
          <ContentBlock key={block.content}>
            <Link href={block.url}>
              <ImagesBlock src={block.image} alt=''/>
              <TextBlock>{block.content}</TextBlock>
            </Link>
          </ContentBlock>
        ))}
      </PhotoWrapper>
      <Link href='/contato'>Quero conhecer todas as formas de me impulsionar</Link>
    </PhotoColection>
  )
}

export default PhotoColectionRender
