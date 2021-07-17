import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useSWR from 'swr'
import PropTypes from 'prop-types'

import CurrencyCard from 'components/CurrencyCard'
import Spinner from 'components/Spinner'
import { fetcher } from 'utils/api'

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: '4rem',
    marginBottom: '2rem',
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
  const { data: response, error } = useSWR(url, fetcher)

  if (error) {
    throw error
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

CurrencyGrid.propTypes = {
  limit: PropTypes.string,
}

export default CurrencyGrid
