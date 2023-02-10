import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    sp_sm: true;
    sp_lg: true;
    dt_sm: true;
    dt_lg: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      sp_sm: 300,
      sp_lg: 700,
      dt_sm: 1024,
      dt_lg: 1440,
    },
  },
  typography: {
    fontFamily: ['DM Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#2F4269',
    },
    secondary: {
      main: '#BC4E27',
    },
  },
})

export default theme
