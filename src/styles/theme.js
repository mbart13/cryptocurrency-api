import { createTheme } from '@material-ui/core/styles'

const sharedProperties = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1100,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
}

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(228, 34%, 66%)',
    },
    background: {
      default: 'hsl(230, 17%, 14%)',
      paper: 'hsl(228, 28%, 20%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(228, 34%, 66%)',
    },
  },
  ...sharedProperties,
})

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: 'hsl(228, 12%, 44%)',
    },
    background: {
      default: 'hsl(225, 100%, 98%)',
      paper: 'hsl(227, 47%, 96%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    text: {
      primary: 'hsl(230, 17%, 14%)',
      secondary: 'hsl(228, 12%, 44%)',
    },
  },
  ...sharedProperties,
})
