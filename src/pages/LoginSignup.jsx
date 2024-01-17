import React from 'react'
import './CSS/Loginsignup.css'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='your name'/>
          <input type='email' placeholder='Email Adress'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already haved an account<span> Login here</span></p>
        <div className="loginsigup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup