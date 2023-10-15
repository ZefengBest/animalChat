import React from 'react'
import SenderAvatar from './SenderAvatar'

const Message = (props: { sender: string; text: string }) => {
  const { sender, text } = props

  return (
    <div className="my-3 d-flex flex-row">
      <SenderAvatar sender={sender} />
      <p className="flex-grow-1 py-3">{text}</p>
    </div>
  )
}

export default Message
