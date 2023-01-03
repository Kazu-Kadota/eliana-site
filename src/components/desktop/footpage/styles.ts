import styled from 'styled-components'
import * as colors from 'src/styles/colors'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40vh;
`

export const Upside = styled.div`
  height: 21vh;
  background: ${colors.baseBlueShade1};
  display: flex;
  justify-content: space-between;
  padding: 0 7vw;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
`

export const ColumnContent = styled.div `
  display: flex;
  flex-direction: column;
  margin-top: 3vh;

  h4 {
    color: ${colors.white};
    padding-bottom: 2vh;
    font-weight: 500;
  }

  a {
    color: ${colors.lightGray};
    padding-bottom: 1vh;
    font-size: 2rem;
  }

  a:visited {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }
`

export const DownSide = styled.div`
  width: 100%;
  height: 19vh;
  background: ${colors.baseBlueShade1};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 8vw;
    height: auto;
    padding-left: 3vw;
  }
`

export const Icons = styled.div`
  width: 12vw;
  display: flex;
  justify-content: space-evenly;
  padding-right: 3vw;

  & > img {
    width: 2vw;
    height: auto;
  }
`
