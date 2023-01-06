import React from 'react'

import {
  HeaderBlock,
  Container,
  HeaderList,
  HeaderListSublist,
  HeaderDropDown,
  Ul
} from './styles'
import logo from 'src/assets/images/header/eliana-pita-consultoria.svg'
import headerList, { HeaderListContent } from './content'

export const Header = () => {

  const headerListRender = (content: HeaderListContent) => {
    if(!content.sublist) {
      return <HeaderList key={content.title}>
        <a href={content.link}>{content.title}</a>
      </HeaderList>
    }

    return <HeaderListSublist>
      <span>{content.title}</span>
      <HeaderDropDown>
        <ul>
          {content.sublist.map((sublist) => (
            <HeaderList key={sublist.title}><a href={sublist.link}>{sublist.title}</a></HeaderList>
          ))}
        </ul>
      </HeaderDropDown>
    </HeaderListSublist>
  }

  return (
    <HeaderBlock>
      <Container>
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <Ul>
          {headerList.map((content) => (
            headerListRender(content)
          ))}
        </Ul>
      </Container>
    </HeaderBlock>
  )
}
