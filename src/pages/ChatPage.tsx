import React from 'react'
import { useParams } from 'react-router-dom'
import Message from '../components/chat/Message'

interface Message {
  sender: string
  text: string
}

const ChatPage = () => {
  const animal = useParams().animal
  const [messages, setMessages] = React.useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('messages')
    return savedMessages ? JSON.parse(savedMessages) : []
  })
  const [input, setInput] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.trim() === '') return

    const message: Message = {
      sender: 'user',
      text: input
    }
    const response: Message = {
      sender: 'bot',
      text: 'To be implemented.'
    }

    setMessages([...messages, message, response])
    setInput('')

    localStorage.setItem('messages', JSON.stringify(messages))
  }

  return (
    <>
      <h1>{animal}</h1>
      {messages.map((message, index) => (
        <Message key={index} sender={message.sender} text={message.text} />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default ChatPage
