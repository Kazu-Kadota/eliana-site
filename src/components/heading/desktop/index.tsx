import React, { Fragment, useState } from 'react'
import { Collapse } from 'react-collapse'

import { HeaderListContentType } from 'src/types/heading'
import { ChevronArrowIcon } from '../styles'

import {
  HeaderButtonList,
  HeaderListContent,
  HeaderSubListContent,
} from './styles'

interface HeaderDesktopListProps {
  content: HeaderListContentType
}

const headerDesktopList: React.FC<HeaderDesktopListProps> = ({
  content
}) => {
  const [isSubListShown, setSubListShown] = useState(false)

  if(!content.subList) {
    return <HeaderListContent key={content.title}>
      <a href={content.link}>{content.title}</a>
    </HeaderListContent>
  }

  return (
    <Fragment>
      <HeaderButtonList onClick={() => {
        console.log(isSubListShown)
        setSubListShown(value => !value)
      }}>
        <h2>{content.title}</h2>
        <ChevronArrowIcon
          size={20}
          $isOpen={isSubListShown}
        />
      </HeaderButtonList>
      <Collapse isOpened={isSubListShown}>
        <ul>
          {content.subList.map((sublist) => (
            <HeaderSubListContent key={sublist.title}>
              <a href={sublist.link}>{sublist.title}</a>
            </HeaderSubListContent>
          ))}
        </ul>
      </Collapse>
    </Fragment>
  )
}

export default headerDesktopList
