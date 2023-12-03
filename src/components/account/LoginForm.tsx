import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userNameError, setUserNameError] = React.useState('')
  const [passwordError, setPasswordError] = React.useState('')

  const handleLogin = async (e: { preventDefault: () => void }) => {
    setUserNameError('')
    setPasswordError('')
    let isNameValid = true
    let isPasswordValid = true
    e.preventDefault()
    //three cases
    //1. username and password are correct
    //2. username is correct but password is wrong
    //3. username is wrong
    console.log(username + ' ' + password)
    try {
      const response = await axios.get(
        `http://localhost:5001/record/check-username/${username}`
      )
      console.log(response.data)
      const exists = response.data.exists
      console.log(exists)
      const dbPassword = exists ? response.data.record.password : null
      console.log('Username exists: ' + exists)
      if (!exists) {
        isNameValid = false
        setUserNameError('Username not exist')
      } else if (dbPassword === null || dbPassword !== password) {
        isPasswordValid = false
        setPasswordError('Password incorrect')
      }
    } catch (error) {
      console.log('Error')
      console.log(error)
    }

    if (isNameValid && isPasswordValid) {
      navigate('/animal-selection')
    }
  }

  return (
    <Form className="mt-0" onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {userNameError && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {userNameError}
          </div>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <div style={{ color: 'red', marginBottom: '10px' }}>
            {passwordError}
          </div>
        )}
        <Form.Text className="text-muted">
          We&apos;ll never share your password with anyone else.
        </Form.Text>
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default LoginForm
