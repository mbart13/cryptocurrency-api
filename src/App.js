import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, CssBaseline, Switch, TextField } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import { lightTheme, darkTheme } from 'styles/theme'
import Header from 'components/Header'
import Input from 'components/Input'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}))

function App() {
  const [mode, setMode] = useState('light')
  const classes = useStyles()
  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header toggleTheme={toggleTheme} />
        <main className={classes.root}>
          <Input />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
