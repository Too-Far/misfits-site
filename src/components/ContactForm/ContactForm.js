import React, {useState} from 'react'
import { TextField, makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    color: 'white',
    gridArea: 'btn',
    backgroundColor: 'black',
    '&:Hover': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  paper: {
    borderRadius: "6px",
    width: '50%',
    textAlign: 'center'

  },
  outerOuter: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
  },
  formWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: 'repeat(auto)',
    gridTemplateAreas:'". fname lname email ."". . btn . ."',
  },
  form: {
    textAlign: 'center',
    color: 'black',
    paddingBottom: '2rem',
    paddingTop: '2rem',
    borderRadius: '6px',
    width: '65%',
    boxShadow: '49px 68px 82px 0px rgba(0,0,0,0.75)'
  },
  firstName: {
    gridArea: 'fname',
    marginBottom: '1rem'
  },
  lastName: {
    gridArea: 'lname',
    marginLeft: '1rem'
  },
  email: {
    gridArea: 'email',
    marginLeft: '1rem'
  },
})


function ContactForm(){
    const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
  })
  const [error, setError] = useState(false)
  const [typeError, setTypeError] = useState(false)

  const handleChange = event => {
    setState({ ...state, [event.target.id]: event.target.value })
    if (state.fname === "") {
      setTypeError(true)
    }
  }
  const onSubmit = () => {
    const { fname, lname, email } = state
    if (fname === "") {
      setError(true)
    }

    console.log(fname, lname, email)
  }
  const classes = useStyles()
  return (
    <div className={classes.outerOuter}>
      <form validate autoComplete="on" className={classes.form} >
        <h1 style={{fontFamily: 'UnifrakturMaguntia, cursive'}}> Want to get in touch? Fill out the form and we'll get back to you</h1>
        <div className={classes.formWrap}>
          <div className={classes.firstName}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="fname"
              label="First Name"
            />
          </div>
          <div className={classes.lastName}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="lname"
              label="Last Name"
            />
          </div>
          <div className={classes.email}>
            <TextField
              required
              error={typeError === true && error === true ? true : false}
              onChange={handleChange}
              id="email"
              label="Email"
            />
          </div>
          <Button
            onClick={onSubmit}
            color="secondary"
            variant="contained"
            className={classes.root}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm