import React from 'react'

const Message = (props: { sender: string; text: string }) => {
  const { sender, text } = props

  return (
    <div>
      {sender}: {text}
    </div>
  )
}

export default Message
