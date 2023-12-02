import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../styles/account-operations.css'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  async function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (validatePassword()) {
      console.log(username + ' ' + password)
      axios
        .post('http://localhost:5001/record/add', {
          username,
          password
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      console.log('User added successfully')
      navigate('/')
    }
  }

  const validatePassword = () => {
    let isValid = false
    const password = document.getElementById('password') as HTMLInputElement
    const confirmPassword = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement
    if (password.value !== confirmPassword.value) {
      //display a line of alert
      setConfirmPasswordError('Passwords do not match')
      setPasswordsMatch(false)
      confirmPassword.setCustomValidity('Passwords do not match')
    } else {
      isValid = true
      setPasswordsMatch(true)
      confirmPassword.setCustomValidity('')
    }
    //add log to print isValid value
    console.log(isValid)
    return isValid
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              setPasswordsMatch(true) // Reset password matching state on each change
            }}
          />
        </div>
        {!passwordsMatch && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            Passwords do not match
          </div>
        )}
        <div>
          <label htmlFor="rememberMe">Remember Me</label>
          <input type="checkbox" id="rememberMe" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
