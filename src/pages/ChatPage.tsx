import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button, Form, InputGroup } from 'react-bootstrap'
import Message from '../components/chat/Message'
import AnimatedMessage from '../components/chat/AnimatedMessage'
import OpenAI from 'openai'
import '../styles/chat.css'

interface Message {
  sender: string
  text: string
}

const ChatPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const animal = useParams().animal!
  const capitalizedAnimal = animal.charAt(0).toUpperCase() + animal.slice(1)
  const [messages, setMessages] = React.useState<Message[]>(() => {
    const savedMessages = localStorage.getItem(`${animal}Messages`)
    return savedMessages ? JSON.parse(savedMessages) : []
  })
  const [input, setInput] = React.useState('')

  const navigate = useNavigate()
  const goToAnimalSelection = () => navigate('/animal-selection')

  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input.trim() === '') return

    const message: Message = {
      sender: 'user',
      text: input
    }
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Response the following message as a ${animal}: ${input}`
        }
      ],
      model: 'gpt-3.5-turbo'
    })
    const responseMessage: Message = {
      sender: animal,
      text: response.choices[0].message.content || 'No comment.'
    }
    const newMessages = [...messages, message, responseMessage]

    setMessages(newMessages)
    setInput('')
    localStorage.setItem(`${animal}Messages`, JSON.stringify(newMessages))
  }

  return (
    <Container
      id="chat-page-container"
      className="d-flex flex-column justify-content-between p-3"
    >
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h1 onClick={goToAnimalSelection}>&lt;</h1>
        <h1 className="mx-auto">{capitalizedAnimal}</h1>
      </div>
      <div className="my-3 flex-grow-1 overflow-auto">
        {messages.map((message, index) => {
          if (index === messages.length - 1) {
            return (
              <AnimatedMessage
                key={index}
                sender={message.sender}
                text={message.text}
              />
            )
          } else {
            return (
              <Message
                key={index}
                sender={message.sender}
                text={message.text}
              />
            )
          }
        })}
      </div>
      <Form onSubmit={handleSendMessage}>
        <InputGroup>
          <Form.Control
            aria-label="Message input"
            type="text"
            value={input}
            placeholder="Enter message"
            onChange={handleInputChange}
          />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </InputGroup>
      </Form>
    </Container>
  )
}

export default ChatPage
