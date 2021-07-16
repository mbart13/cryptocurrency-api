import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { lightTheme, darkTheme } from 'styles/theme'
import Header from 'components/Header'
import Form from 'components/Form'
import CurrencyGrid from 'components/CurrencyGrid'
import useDarkMode from 'hooks/useDarkMode'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
})

const INITIAL_LIMIT = 8

function App() {
  const [mode, setMode] = useDarkMode()
  const [limit, setLimit] = useState(INITIAL_LIMIT)
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
          <Form setLimit={setLimit} />
          <CurrencyGrid limit={limit} />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
