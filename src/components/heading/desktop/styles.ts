import styled from 'styled-components'

import config from 'src/styles/config'
import { RiArrowDropDownLine } from 'react-icons/ri'

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

export const HeaderButtonList = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: ${colors.others.white};

  h2 {
    cursor: default;
    color: ${colors.base.blue.shade_1};
    font-weight: 500;
    font-size: ${font_size.sp.md}
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
