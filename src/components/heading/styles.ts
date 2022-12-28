import styled from 'styled-components'

import * as colors from 'src/styles/colors'
import { gapHeader } from 'src/styles/gap'

export const Aside = styled.aside`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  border-bottom: 0.1rem solid ${colors.lightGray};

  a > img {
    display: block;
    width: 100%;
    height: 4.4rem;
    padding: 1rem 0.5rem;
  }
`

export const Container = styled.div`
  max-width: 100%;
  gap: ${gapHeader};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background: ${colors.white};
`

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  div:hover + li > div > ul {
    display: block;
  }
`

export const Ul = styled.ul`
  justify-content: center;
  align-items: center;

  li {
    position: relative;
    display: block;
    padding: 2.15rem 1.5rem;
    font-weight: 500;
    font-size: 1.7rem;
    color: ${colors.baseBlueShade1};
  }

  li a {
    color: ${colors.baseBlueShade1};
  }
`

export const HeaderList = styled.li`
  a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background: ${colors.secondaryOrangeShade1};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`

export const HeaderListSublist = styled.li`
  span {
    cursor: default;
  }

  &:hover {
    display: block;
    background: ${colors.white}
  }

  &:hover > div {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }

  &:hover > div > ul {
    display: block;
  }
`

export const HeaderDropDown = styled.div`
  visibility: hidden;
  opacity: 0;
  display: flex;
  position: absolute;
  margin-top: 2.1rem;
  width: 100%;
  z-index: -1;
  right: 0.2rem;
  justify-content: center;
  text-align: center;
  border-bottom: 0.1rem solid ${colors.lightGray};
  border-right: 0.1rem solid ${colors.lightGray};
  border-left: 0.1rem solid ${colors.lightGray};

  ul {
    display: none;
  }

  ul li a {
    justify-content: center;
  }
`
