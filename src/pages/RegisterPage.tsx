import React from 'react'
import RegisterForm from '../components/account/RegisterForm'
import '../styles/account-operations.css'

const RegisterPage = () => (
  <div className="d-flex flex-column justify-content-center align-items-center text-center">
    <h1 className="mb-3">Join the Jungle Jamboree!</h1>
    <div className="account-operations">
      <RegisterForm />
    </div>
  </div>
)

export default RegisterPage
