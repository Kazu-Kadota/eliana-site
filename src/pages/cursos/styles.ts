import Box from '@mui/material/Box'
import styled from 'styled-components'

import config from '@/styles/config'

const colors = config.theme.colors
const font_sizes = config.theme.font_sizes
const variable = config.var

const Container = styled(Box)`
  font-size: ${font_sizes.dt.lg};
  position: relative;
  margin-top: ${variable.header_height};
  background: ${colors.base.background.color_1};
`

export default Container
