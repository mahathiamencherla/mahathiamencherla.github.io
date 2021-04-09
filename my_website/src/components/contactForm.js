import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: '2rem',
      width: '100%',
      fontSize: '2rem',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1rem'
    }, 
    '& .MuiInputLabel-root': {
      fontSize: '2rem',
      backgroundColor: "white",
      paddingRight: '.5rem'
    },
    '& .MuiInputBase-input': {
      fontSize: '1.7rem'
    }
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <form className={`${classes.root} form-div`} >
      <h1 style={{marginBottom: '3rem'}}>Contact Me</h1>
      <TextField
          key="name"
          id="outlined-helperText"
          label="Full Name"
          helperText="Required*"
          variant="outlined"
        />
      <TextField
          key="email"
          id="outlined-helperText"
          label="Email"
          helperText="Required*"
          variant="outlined"
        />
        <TextField
          key="message"
          id="outlined-multiline-static"
          label="Message"
          helperText="Required*"
          // multiline
          // rows={4}
          variant="outlined"
        />
        <button className="submit-button">Submit</button>
  </form>
  )
}

export default ContactForm;