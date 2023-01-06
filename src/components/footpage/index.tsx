import React from 'react'

import instagram_icon from 'src/assets/images/footpage/instagram-white.png'
import linkedin_icon from 'src/assets/images/footpage/linkedin-white.png'
import logo from 'src/assets/images/footpage/Logo.svg'
import whatsapp_icon from 'src/assets/images/footpage/whatsapp-white.png'
import contents from './upside_content'

import {
  ColumnContent,
  Container,
  DownSide,
  Icons,
  Upside
} from './styles'

export const Footerpage = () => {
  return (
    <Container>
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

      <DownSide>
        <img src={logo}></img>
        <Icons>
          <img src={whatsapp_icon} />
          <img src={linkedin_icon} />
          <img src={instagram_icon} />
        </Icons>
      </DownSide>
    </Container>
  )
}
