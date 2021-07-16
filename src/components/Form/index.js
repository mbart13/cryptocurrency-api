import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  form: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      margin: '1.5rem auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },
  button: {
    marginLeft: '1rem',
    alignSelf: 'flex-end',
  },
  error: {
    position: 'absolute',
    fontSize: '0.75rem',
    top: '3.4375rem',
    left: 0,
    color: theme.palette.error.main,
  },
  inputLabel: {
    textAlign: 'left',
    transform: 'translate(0, -5px) scale(0.75)',
  },
}))

const MIN_NUMBER = 1
const MAX_NUMBER = 5000

const Form = ({ selectedNumber, setSelectedNumber }) => {
  const classes = useStyles()

  // let hasError = selectedNumber < MIN_NUMBER || selectedNumber > MAX_NUMBER

  const handleChange = e => {
    setSelectedNumber(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(selectedNumber)
  }
  // console.log(hasError)
  // hasError = false
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        // error={hasError}
        id="number-of-currencies"
        label="Enter number of currencies  to retrieve"
        type="number"
        // value={selectedNumber}
        onChange={handleChange}
        className={classes.root}
        InputProps={{ inputProps: { min: MIN_NUMBER, max: MAX_NUMBER } }}
        InputLabelProps={{
          shrink: true,
          classes: {
            root: classes.inputLabel,
          },
        }}
      />
      {/* {hasError && (
        <p className={classes.error} aria-live="polite">
          Number cannot be less than 0 or greaten than 100
        </p>
      )} */}
      <Button variant="outlined" className={classes.button} type="submit">
        Show
      </Button>
    </form>
  )
}

export default Form
