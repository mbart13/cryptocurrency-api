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
import { formatPrice, formatNumber } from 'utils/helpers'
import { ReactComponent as DownIcon } from 'assets/icons/icon-down.svg'
import { ReactComponent as UpIcon } from 'assets/icons/icon-up.svg'
const data = {
  id: 1,
  name: 'Bitcoin',
  symbol: 'BTC',
  slug: 'bitcoin',
  num_market_pairs: 9010,
  date_added: '2013-04-28T00:00:00.000Z',
  tags: [
    'mineable',
    'pow',
    'sha-256',
    'store-of-value',
    'state-channels',
    'coinbase-ventures-portfolio',
    'three-arrows-capital-portfolio',
    'polychain-capital-portfolio',
    'binance-labs-portfolio',
    'arrington-xrp-capital',
    'blockchain-capital-portfolio',
    'boostvc-portfolio',
    'cms-holdings-portfolio',
    'dcg-portfolio',
    'dragonfly-capital-portfolio',
    'electric-capital-portfolio',
    'fabric-ventures-portfolio',
    'framework-ventures',
    'galaxy-digital-portfolio',
    'huobi-capital',
    'alameda-research-portfolio',
    'a16z-portfolio',
    '1confirmation-portfolio',
    'winklevoss-capital',
    'usv-portfolio',
    'placeholder-ventures-portfolio',
    'pantera-capital-portfolio',
    'multicoin-capital-portfolio',
    'paradigm-xzy-screener',
  ],
  max_supply: 21000000,
  circulating_supply: 18757300,
  total_supply: 18757300,
  platform: null,
  cmc_rank: 1,
  last_updated: '2021-07-15T18:55:02.000Z',
  quote: {
    USD: {
      price: 31473.285247263422,
      volume_24h: 20926848425.842915,
      percent_change_1h: 0.85605212,
      percent_change_24h: -3.86213471,
      percent_change_7d: -4.10746675,
      percent_change_30d: -22.5156512,
      percent_change_60d: -31.12406445,
      percent_change_90d: -49.06853926,
      market_cap: 590353853368.4941,
      last_updated: '2021-07-15T18:55:02.000Z',
    },
  },
}

const useStyles = makeStyles(theme => ({
  root: props => ({
    borderTop: props
      ? `4px solid ${theme.palette.error.main}`
      : `4px solid ${theme.palette.success.main}`,
  }),
  name: {
    fontSize: '1.25rem',
    color: theme.palette.text.secondary,
  },
  price: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '2.25rem',
  },
  listItem: {
    flexDirection: 'column',
    paddingBottom: 0,
  },
  key: {
    color: theme.palette.text.secondary,
    fontSize: '0.8125rem',
    fontWeight: 'bold',
  },
  value: {
    fontSize: '0.8125rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  dailyChange: props => ({
    color: props ? theme.palette.error.main : theme.palette.success.main,
    fontWeight: 'bold',
    fontSize: '0.75rem',
    marginTop: '.5rem',
    marginLeft: '.3rem  ',
  }),
  arrow: {
    transform: 'translateY(1px)',
  },
}))

const CurrencyCard = () => {
  const isDown = data.quote.USD.percent_change_24h < 0
  const classes = useStyles(isDown)
  return (
    <Box
      p="1.25rem"
      bgcolor="background.paper"
      // maxWidth="255px"
      borderRadius="5px"
      textAlign="center"
      className={classes.root}
    >
      <h1 className={classes.name}>
        {data.name} {data.symbol}
      </h1>
      <p className={classes.price}>${formatPrice(data.quote.USD.price)}</p>
      <List>
        <ListItem className={classes.listItem}>
          <span className={classes.key}>Market Cap</span>
          <span className={classes.value}>
            {formatNumber(data.quote.USD.market_cap)}
          </span>
        </ListItem>
        <ListItem className={classes.listItem}>
          <span className={classes.key}>Volume</span>
          <span className={classes.value}>
            {formatNumber(data.quote.USD.volume_24h)}
          </span>
        </ListItem>
      </List>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box alignSelf="center" className={classes.arrow}>
          {isDown ? <DownIcon /> : <UpIcon />}
        </Box>
        <p className={classes.dailyChange}>{`${formatPrice(
          Math.abs(data.quote.USD.percent_change_24h)
        )}%`}</p>
      </Box>
    </Box>
  )
}

export default CurrencyCard
