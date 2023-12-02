import React from 'react'
import LoginForm from '../components/account/LoginForm'
import { useNavigate } from 'react-router-dom'
import '../styles/account-operations.css'

const LandingPage = () => {
  const navigate = useNavigate()
  const goToRegisterPage = () => navigate('/register')

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center">
      <div id="welcome-words" className="mb-3">
        <h2>
          Welcome to the fur-tastic world of <h1>Animal Chat</h1>
        </h2>
        <p>
          Are you ready for a zoo-rific adventure? Unleash your innner beast in
          our chat safari. Our AI speaks fluent animal!
        </p>
      </div>
      <div className="account-operations">
        <LoginForm />
        <p className="mb-0">
          Don&apos;t have an account? Sign up{' '}
          <a href="#" onClick={goToRegisterPage}>
            here
          </a>
          !
        </p>
      </div>
    </div>
  )
}

export default LandingPage
