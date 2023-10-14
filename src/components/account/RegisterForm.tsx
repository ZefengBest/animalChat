import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/animal-selection')
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <div>
          <label htmlFor="rememberMe">Remember Me</label>
          <input type="checkbox" id="rememberMe" />
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
