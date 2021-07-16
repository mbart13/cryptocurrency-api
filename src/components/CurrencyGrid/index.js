import {
  Box,
  Container,
  CssBaseline,
  Switch,
  TextField,
  List,
  ListItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CurrencyCard from 'components/CurrencyCard'

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

const CurrencyGrid = () => {
  const classes = useStyles()
  return (
    <Box className={classes.grid}>
      <CurrencyCard />
      <CurrencyCard />
      <CurrencyCard />
      <CurrencyCard />
      <CurrencyCard />
      <CurrencyCard />
    </Box>
  )
}

export default CurrencyGrid
