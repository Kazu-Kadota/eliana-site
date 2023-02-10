import Link from 'next/link'
import React, { useState } from 'react'
import { Collapse } from 'react-collapse'

import { ChevronArrowIcon } from '../styles'
import { HeaderListContentType } from '@/types/heading'

import {
  HeaderButtonList,
  HeaderDesktopItem,
  HeaderListContent,
  HeaderSubListContent,
} from './styles'

interface HeaderDesktopListProps {
  content: HeaderListContentType
}

const HeaderDesktopList: React.FC<HeaderDesktopListProps> = ({ content }) => {
  const [isSubListShown, setSubListShown] = useState(false)

  if (!content.subList) {
    return (
      <HeaderListContent key={content.title}>
        <a href={content.link}>{content.title}</a>
      </HeaderListContent>
    )
  }

  return (
    <HeaderButtonList
      onMouseEnter={() => setSubListShown(true)}
      onMouseLeave={() => setSubListShown(false)}
    >
      <h2>{content.title}</h2>
      <ChevronArrowIcon size={20} $isOpen={isSubListShown} />
      <HeaderDesktopItem>
        <Collapse isOpened={isSubListShown}>
          {content.subList.map((sublist) => (
            <HeaderSubListContent key={sublist.title}>
              <Link href={sublist.link}>{sublist.title}</Link>
            </HeaderSubListContent>
          ))}
        </Collapse>
      </HeaderDesktopItem>
    </HeaderButtonList>
  )
}

export default HeaderDesktopList
