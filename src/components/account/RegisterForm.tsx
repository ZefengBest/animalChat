import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../styles/account-operations.css'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  async function onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (await validateRegistration()) {
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
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }

  const validateRegistration = async () => {
    let isValid = true

    const username = document.getElementById('username') as HTMLInputElement
    const password = document.getElementById('password') as HTMLInputElement
    const confirmPassword = document.getElementById(
      'confirmPassword'
    ) as HTMLInputElement

    setConfirmPasswordError('')
    setUserNameError('')
    setPasswordError('')

    if (username.value === '') {
      isValid = false
      setUserNameError('Username cannot be empty')
    }

    try {
      const response = await axios.get(
        `http://localhost:5001/record/check-username/${username.value}`
      )
      const exists = response.data.exists
      console.log('Username exists: ' + exists)
      if (exists) {
        isValid = false
        setUserNameError('Username already exists')
      }
    } catch (error) {
      console.log(error)
    }

    console.log('Username is valid: ' + isValid)

    //add validation that password length must between 8 and 20
    //password must contain at least one number, one lowercase and one uppercase letter
    //password must contain at least one special character
    //password cannot contain spaces
    //password cannot contain username
    const passwordRex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,20}$/
    if (!passwordRex.test(password.value)) {
      isValid = false
      setPasswordError(
        'Password must be between 8 and 20 characters long\n' +
          'Password must contain at least one number, one lowercase and one uppercase letter\n' +
          'Password must contain at least one special character\n' +
          'Password cannot contain spaces\n'
      )
    }

    if (password.value != confirmPassword.value) {
      //display a line of alert
      isValid = false
      setConfirmPasswordError('Passwords do not match')
      setPasswordsMatch(false)
    }
    //add log to print isValid value
    console.log(isValid)
    console.log('Enter insertion now ')
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {userNameError && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {userNameError}
          </div>
        )}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {passwordError && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {passwordError.split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        )}
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
