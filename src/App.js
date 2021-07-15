import { useState, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, CssBaseline, Switch, TextField } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import { lightTheme, darkTheme } from 'styles/theme'
import Header from 'components/Header'
import Form from 'components/Form'
import fetchCurrencies from 'utils/api'

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
}))

function App() {
  const [mode, setMode] = useState('light')
  const [currencies, setCurrencies] = useState([])
  const [selectedNumber, setSelectedNumber] = useState(2)
  const classes = useStyles()

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    fetchCurrencies(selectedNumber).then(data => console.log(data))
  }, [selectedNumber])

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header toggleTheme={toggleTheme} />
        <main className={classes.root}>
          <Form
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
