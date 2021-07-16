import { Box, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { formatPrice, formatNumber } from 'utils/helpers'
import { ReactComponent as DownIcon } from 'assets/icons/icon-down.svg'
import { ReactComponent as UpIcon } from 'assets/icons/icon-up.svg'
import PropTypes from 'prop-types'

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

const CurrencyCard = ({ currency }) => {
  const { name, symbol } = currency
  const { price, market_cap, volume_24h, percent_change_24h } =
    currency.quote.USD
  const isDown = percent_change_24h < 0
  const classes = useStyles(isDown)

  return (
    <Box
      p="1.25rem"
      bgcolor="background.paper"
      borderRadius="5px"
      textAlign="center"
      className={classes.root}
      display="flex"
      flexDirection="column"
    >
      <h2 className={classes.name}>
        {name} {symbol}
      </h2>
      <p className={classes.price}>${formatPrice(price)}</p>
      <List>
        <ListItem className={classes.listItem}>
          <span className={classes.key}>Market Cap</span>
          <span className={classes.value}>${formatNumber(market_cap)}</span>
        </ListItem>
        <ListItem className={classes.listItem}>
          <span className={classes.key}>Volume</span>
          <span className={classes.value}>${formatNumber(volume_24h)}</span>
        </ListItem>
      </List>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="auto"
      >
        <Box alignSelf="center" className={classes.arrow}>
          {isDown ? <DownIcon /> : <UpIcon />}
        </Box>
        <p className={classes.dailyChange}>{`${formatPrice(
          Math.abs(percent_change_24h)
        )}%`}</p>
      </Box>
    </Box>
  )
}

CurrencyCard.propTypes = {
  currency: PropTypes.shape({
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
    market_cap: PropTypes.number,
    volume_24h: PropTypes.number,
    percent_change_24h: PropTypes.number,
  }),
}

export default CurrencyCard
