import {
  Box,
  Switch,
  Typography,
  FormControlLabel,
  useMediaQuery,
} from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Theme } from 'hooks/useDarkMode'

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: '0',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  h1: {
    fontWeight: '700',
  },
  label: {
    fontWeight: '700',
  },
}))

const Header = ({ mode, toggleTheme }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles()
  return (
    <Box
      component="header"
      pt="2.25rem"
      display="flex"
      flexDirection={matches ? 'row' : 'column'}
      justifyContent="space-between"
    >
      <Typography variant="h5" component="h1" className={classes.h1}>
        Cryptocurrency API
      </Typography>
      <FormControlLabel
        control={<Switch onChange={toggleTheme} />}
        label={
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.label}
          >
            {mode === Theme.dark ? 'Light Mode' : 'Dark Mode'}
          </Typography>
        }
        labelPlacement="start"
        className={classes.root}
      />
    </Box>
  )
}

Header.propTypes = {
  mode: PropTypes.string,
  setLimit: PropTypes.func,
}

export default Header
