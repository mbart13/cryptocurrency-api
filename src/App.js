import { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, CssBaseline } from '@material-ui/core'
import { ErrorBoundary } from 'react-error-boundary'

import { lightTheme, darkTheme } from 'styles/theme'
import Header from 'components/Header'
import Form from 'components/Form'
import CurrencyGrid from 'components/CurrencyGrid'
import useDarkMode from 'hooks/useDarkMode'
import ErrorFallback from 'components/ErrorFallback'

const INITIAL_LIMIT = '8'

function App() {
  const [mode, setMode] = useDarkMode()
  const [limit, setLimit] = useState(INITIAL_LIMIT)

  const selectedTheme = mode === 'dark' ? darkTheme : lightTheme

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header mode={mode} toggleTheme={toggleTheme} />
        <main>
          <Form setLimit={setLimit} />
          <ErrorBoundary key={limit} FallbackComponent={ErrorFallback}>
            <CurrencyGrid limit={limit} />
          </ErrorBoundary>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
