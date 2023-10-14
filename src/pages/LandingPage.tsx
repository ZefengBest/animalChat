import React from 'react'
import LoginForm from '../components/account/LoginForm'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  const goToRegisterPage = () => navigate('/register')

  return (
    <div>
      <h1>
        Welcome to the fur-tastic world of Animal Chat! Are you ready for a
        zoo-rific adventure? Unleash your innner beast in our chat safari. Our
        AI speaks fluent animal!
      </h1>
      <LoginForm />
      <p>
        Don&apos;t have an account? Sign up{' '}
        <a href="#" onClick={goToRegisterPage}>
          here
        </a>
        !
      </p>
    </div>
  )
}

export default LandingPage
