import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import AnimalSelectionPage from './pages/AnimalSelectionPage'
import ChatPage from './pages/ChatPage'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/animal-selection', element: <AnimalSelectionPage /> },
  { path: '/chat/:animal', element: <ChatPage /> }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
