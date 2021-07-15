import { Container, CssBaseline, Switch, TextField } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
    marginTop: '1.5rem',
  },
}))

const Input = () => {
  const classes = useStyles()
  return (
    <TextField
      id="number-of-currencies"
      label="Enter number of currencies"
      type="number"
      required
      className={classes.root}
      InputProps={{ inputProps: { min: 1, max: 100 } }}
    />
  )
}

export default Input
