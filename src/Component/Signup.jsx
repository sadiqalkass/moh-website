import React from 'react'
import img from '../img/muhd-img.jpg'

const Signup = () => {
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
        <span className='tob-left'>Already have an account? <a href="" className='fr-a'>Login</a></span>
        <div className="form-container">
          <div className='fr-div'>
            <h2>Sign up to your Account 🚀</h2>
            <p>Please enter your details here</p>
              <span><ion-icon name="logo-google"></ion-icon></span>
            <a href="">
              Sign up with Google
            </a>
            <div className='or-div'>
              <hr />
              <p>Or</p>
              <hr />
            </div>
          </div>
          <form action="">
            <div className="name-div">
              <div className='input-div'>
                <span>Frist Name</span>
                <input type="text" placeholder='Frist Name' />
              </div>
              <div className='input-div'>
                <span>last Name</span>
                <input type="text" placeholder='last Name' />
              </div>
            </div>
            <div className='input-div'>
              <span>Email Adress</span>
              <input type="email" placeholder='Enter email' />
            </div>
            <div className="input-div">
              <span>Password</span>
              <input type="password"  placeholder='Enter  password' />
            </div>
            <div className="input-div">
              <span> Confirm Password</span>
              <input type="password"  placeholder='Confirm password' />
            </div>
            <div className="ch-div">
              <input type="checkbox"  />
              <p>I accept the Terms and Conditions</p>
            </div>
            <button>Sign Up</button>
          </form>
      </div>
      </div>
    </div>
  )
}

export default Signup
