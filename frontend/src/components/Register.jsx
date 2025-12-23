import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (

    <div id="register-container">
      <h1>CREATE ACCOUNT</h1>
      <input id="username" type="text" placeholder="Username" />
      <br />
      <input id="email" type="email" placeholder="Email" />
      <br />
      <input id="password" type="password" placeholder="Password" />
      <br />
      <button id="register-button">Register</button>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>


  )
}

export default Register
