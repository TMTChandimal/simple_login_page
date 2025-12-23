import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div id ="login-container">
      
      <h2>LOGIN</h2>
      <input id = "username" type="text" placeholder="Username" />
      <br />
      <input id = "password" type="password" placeholder="Password" />
      <br />
      <button id = "login-button">Login</button>

      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  )
}

export default Login
