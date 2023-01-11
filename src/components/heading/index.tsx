import React, { createContext, useState } from 'react'
import { Collapse } from 'react-collapse'
import { IoMdMenu } from 'react-icons/io'

import logo from 'src/assets/images/header/eliana-pita-consultoria.svg'

import {
  HeaderBlock,
  Container,
  HeaderList,
  HeaderMenuButton,
  HeaderMenuButtonList,
} from './styles'
import headerList from './content'
import HeaderDesktopList from './desktop'
import HeaderSmartPhoneList from './smarphone'

interface ShownDesktopStateType {
  isShownDesktop: boolean
  setShownDesktop: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShownDesktopContext = createContext<ShownDesktopStateType>({
  isShownDesktop: false,
  setShownDesktop: () => {false}
})

export const Header = () => {
  const [isShownDesktop, setShownDesktop] = useState(false)
  const [isShownSmartPhone, setShownSmartPhone] = useState(false)

  return (
    <>
      <HeaderBlock>
        <Container>
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <HeaderList>
            <ShownDesktopContext.Provider value={{
              isShownDesktop,
              setShownDesktop
            }}>
              {headerList.map((content) => (
                <HeaderDesktopList key={content.title} content={content}/>
              ))}
            </ShownDesktopContext.Provider>
          </HeaderList>
          <HeaderMenuButton
            onClick={() => {
              setShownSmartPhone((value) => !value)
            }}
          >
            <IoMdMenu size={30} />
          </HeaderMenuButton>
        </Container>
      </HeaderBlock>

      <HeaderMenuButtonList>
        <Collapse isOpened={isShownSmartPhone}>
          {headerList.map((content) => (
            <HeaderSmartPhoneList key={content.title} content={content} />
          ))}
        </Collapse>
      </HeaderMenuButtonList>
    </>
  )
}
