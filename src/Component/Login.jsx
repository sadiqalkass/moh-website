import React from 'react'
import img from '../img/muhd-img.jpg'

const Login = () => {
  return (
    <div className='auth-div'>
      <div className="fr-half">
        <img src={img} alt="" />
        <span className='img-span'>
          <p>Welcome back!Let's Create</p>
          <p>Something Extraodinary Together!</p>
        </span>
      </div>
      <div className="sec-half">
        <span className='tob-left'>Dont't have an account? <a href="" className='fr-a'>Sign Up</a></span>
        <div className="form-container">
          <div className='fr-div'>
            <h2>Sign in to your Account 🚀</h2>
            <p>Please enter your details here</p>
              <span><ion-icon name="logo-google"></ion-icon></span>
            <a href="">
              Sign in with Google
            </a>
            <div className='or-div'>
              <hr />
              <p>Or</p>
              <hr />
            </div>
          </div>
          <form action="">
            <div className='input-div'>
              <span>Email Adress</span>
              <input type="email" placeholder='Enter your email' />
            </div>
            <div className="input-div">
              <span>Password</span>
              <input type="password"  placeholder='Enter your password' />
            </div>
            <div className="ch-div">
              <input type="checkbox"  />
              <p>Remember me</p>
            </div>
            <button>Login</button>
            <a href="">Forget password?</a>
          </form>
      </div>
      </div>
    </div>
  )
}

export default Login
