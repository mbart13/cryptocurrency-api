import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

// A custom theme for this app
const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
})

export default theme
