import Image from 'next/image'
import Link from 'next/link'
import React, { createContext, useState } from 'react'
import { Collapse } from 'react-collapse'
import { IoMdMenu } from 'react-icons/io'

import headerList from '@/contents/heading/content'
import logo from 'public/assets/images/header/eliana-pita-consultoria.svg'

import HeaderDesktopList from './desktop'
import HeaderSmartPhoneList from './smarphone'
import {
  HeaderBlock,
  Container,
  HeaderList,
  HeaderMenuButton,
  HeaderMenuButtonList,
} from './styles'

interface ShownDesktopStateType {
  isShownDesktop: boolean
  setShownDesktop: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShownDesktopContext = createContext<ShownDesktopStateType>({
  isShownDesktop: false,
  setShownDesktop: () => {false},
})

const Header: React.FC = () => {
  const [isShownDesktop, setShownDesktop] = useState(false)
  const [isShownSmartPhone, setShownSmartPhone] = useState(false)

  return (
    <>
      <HeaderBlock>
        <Container>
          <Link href='/'>
            <Image src={logo} alt='' />
          </Link>
          <HeaderList>
            <ShownDesktopContext.Provider value={{
              isShownDesktop,
              setShownDesktop,
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

export default Header
