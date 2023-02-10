import { RiArrowDropDownLine } from 'react-icons/ri'
import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const screens = config.screens
const variable = config.var

interface ChevronArrowType {
  $isOpen: boolean
}

export const HeaderBlock = styled.aside`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.others.lightGray};
  background: ${colors.others.white};
  z-index: 2;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;

  & > ul:first-of-type {
    display: none;
  }

  a > img {
    display: block;
    width: 100%;
    height: 4.2rem;
    margin: 1rem 0;
  }

  @media (${screens.min_sizes.sp_lg}) {
    padding: 0 2rem;
    margin: 0 3rem;

    a, span {
      font-size: ${font_sizes.sp.md}
    }
  }

  @media (${screens.min_sizes.dt_sm}) {
    padding: 0 5rem;

    & > ul:first-of-type {
      display: flex;
    }

    a, span {
      font-size: ${font_sizes.sp.md}
    }
  }

  @media (${screens.min_sizes.dt_lg}) {
    padding: 0 10rem;
  }
`

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  list-style-type: none;

  li {
    position: relative;
    list-style-type: none;
    padding: 2.1rem 2rem;
    font-weight: 500;
    color: ${colors.base.blue.shade_1};
  }

  li a {
    color: ${colors.base.blue.shade_1};
  }
`

export const HeaderMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  height: 2.8rem;

  @media (${screens.max_sizes.sp_lg}) {
    display: block;
  }

  &:hover > ul {
    display: block;
  }
`

export const HeaderMenuButtonList = styled.ul`
  position: fixed;
  display: block;
  align-items: center;
  left: 0;
  top: ${variable.header_height};
  width: 100%;
  background: ${colors.others.white};
  z-index: 1;
`

export const HeaderMenuButtonListContent = styled.li`
  height: 8rem;
  display: grid;
  padding: 0 5rem;
  border-bottom:  0.1rem solid ${colors.others.lightGray};
  text-align: left;
  align-content: center;

  a {
    font-size: ${font_sizes.sp.lg};
    color: ${colors.base.blue.shade_1};
  }
`

export const ChevronArrowIcon = styled(RiArrowDropDownLine)<ChevronArrowType>`
  rotate: ${(props) => props.$isOpen ? '180deg' : '0deg'};
  transition: rotate 500ms;
  color: ${colors.base.blue.shade_1}
`
