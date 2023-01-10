import styled from 'styled-components'

import config from 'src/styles/config'

const colors = config.theme.colors
const font_size = config.theme.font_sizes

export const HeaderListContent = styled.li`
  a::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    width: 0%;
    height: 0.2rem;
    background: ${colors.secondary.orange.shade_1};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`

export const HeaderButtonList = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background: ${colors.others.white};
  padding: 2.1rem 1.2rem;
  position: relative;

  h2 {
    cursor: default;
    color: ${colors.base.blue.shade_1};
    font-weight: 500;
    font-size: ${font_size.sp.md};
    text-align: center;
  }
`

export const HeaderSubListContent = styled(HeaderListContent)`
  a::after {
    display: block;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`

export const HeaderDesktopItem = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${colors.others.white};

  a {
    display: block;
    text-align: center;
  }
`