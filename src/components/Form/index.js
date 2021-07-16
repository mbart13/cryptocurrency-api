import { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  form: {
    marginTop: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      marginRight: 'auto',
      marginLeft: 'auto',
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

const Form = ({ setLimit }) => {
  const [inputValue, setInputValue] = useState('')
  const classes = useStyles()

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (inputValue) {
      setLimit(inputValue)
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="number-of-currencies"
        label="Enter number of currencies to retrieve"
        type="number"
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
      <Button variant="outlined" className={classes.button} type="submit">
        Show
      </Button>
    </form>
  )
}

Form.propTypes = {
  setLimit: PropTypes.func,
}

export default Form
