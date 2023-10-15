import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/animal-selection')
  }

  return (
    <Form className="mt-0" onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
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
