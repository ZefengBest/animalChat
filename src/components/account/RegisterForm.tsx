import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import '../../styles/account-operations.css'

const RegisterForm = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/')
  }

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mt-0 mb-3" controlId="formUsername">
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
      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
        <Form.Text className="text-muted">
          Please enter the same password again.
        </Form.Text>
      </Form.Group>
      <Button className="mt-0" variant="primary" type="submit">
        Register
      </Button>
    </Form>
  )
}

export default RegisterForm
