import styled from 'styled-components'
import Box from '@mui/material/Box'
import config from 'src/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const variable = config.var

export const Container = styled(Box)`
  font-size: ${font_sizes.dt.lg};
  position: relative;
  margin-top: ${variable.header_height};
  background: ${colors.base.background.color_1};
`
