import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
