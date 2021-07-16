import { memo } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useSWR from 'swr'

import CurrencyCard from 'components/CurrencyCard'
import ErrorFallback from 'components/ErrorFallback'
import Spinner from 'components/Spinner'

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: '4rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}))

const baseUrl = 'https://cryptocurrency-api-backend.vercel.app/api'

const CurrencyGrid = ({ limit }) => {
  const classes = useStyles()
  const url = `${baseUrl}?limit=${limit}`
  const { data: response, error } = useSWR(url)

  if (error) {
    return <ErrorFallback />
  }

  if (!response) {
    return <Spinner />
  }

  return (
    <Box className={classes.grid}>
      {response.data.map(currency => (
        <CurrencyCard key={currency.id} currency={currency} />
      ))}
    </Box>
  )
}

export default memo(CurrencyGrid)
