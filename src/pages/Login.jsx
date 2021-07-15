import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
function Login() {
  return (
    <div>
      <TwitterIcon />
      <div>
        Log in to Twitter
      </div>
      <form >
        <input type="text"></input>
        <input type="text"></input>
        <button>Log in</button>
      </form>

    </div>
  )
}

export default Login
