import React, { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";

const twitterColorString = "hsl(202.8, 89.1%, 53.1%)";
const TwitterTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: twitterColorString,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: twitterColorString,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: twitterColorString,
      },
      '&:hover fieldset': {
        borderColor: twitterColorString,
      },
      '&.Mui-focused fieldset': {
        borderColor: twitterColorString,
      },
    },
  }
})(TextField)

function Login() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")


  const handleUsernameChange = (event) => {
    const userName = event.target.value
    setUserName(userName)
  }
  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(password)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
  }
  const validatedInputs = () => {
    if (!userName) return false
    if (!password) return false

    return true
  }
  return (
    <div className="login">
      <div className="login_box">
        <TwitterIcon className="twitter_icon" />
        <div className="login_text">
          Log in to Twitter
        </div>
        <form className="login_form" onSubmit={handleFormSubmit}>
          <TwitterTextField className="login_textbox" label="Phone, email, or username" variant="outlined" autoFocus={true} onChange={handleUsernameChange} value={userName} />
          <TwitterTextField className="login_textbox" variant="outlined" label="Password" type="password" onChange={handlePasswordChange} value={password} />
          <button className="login_button" disabled={!validatedInputs()}>Log in</button>
        </form>
        <div className="login_other_actions">
          <a href="#/">Forgot Password?</a>
          <a href="#/">Sign Up for Twitter</a>
        </div>
      </div>
    </div>
  )
}

export default Login
