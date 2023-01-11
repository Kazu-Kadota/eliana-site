import React, { Fragment, useState } from 'react'
import { Collapse } from 'react-collapse'

import { HeaderListContentType } from 'src/types/heading'
import { ChevronArrowIcon } from '../styles'

import {
  HeaderMenuButtonListContent,
  HeaderMenuButtonListSubList,
  HeaderMenuButtonSubListContent,
} from './styles'

interface HeaderSmartPhoneListProps {
  content: HeaderListContentType
}

const HeaderSmartPhoneList: React.FC<HeaderSmartPhoneListProps> = ({
  content,
}) => {
  const [isSubListShown, setSubListShown] = useState(false)

  if (!content.subList) {
    return (
      <HeaderMenuButtonListContent key={content.title}>
        <a href={content.link}>{content.title}</a>
      </HeaderMenuButtonListContent>
    )
  }

  return (
    <Fragment>
      <HeaderMenuButtonListSubList onClick={() =>
        setSubListShown(value => !value)
      }>
        <span>{content.title}</span>
        <ChevronArrowIcon
          size={40}
          $isOpen={isSubListShown}
        />
      </HeaderMenuButtonListSubList>
      <Collapse isOpened={isSubListShown}>
        <ul>
          {content.subList.map((subList) => (
            <HeaderMenuButtonSubListContent key={subList.title}>
              <a href={subList.link}>{subList.title}</a>
            </HeaderMenuButtonSubListContent>
          ))}
        </ul>
      </Collapse>
    </Fragment>
  )
}

export default HeaderSmartPhoneList
