import React from 'react'
import '../../styles/chat.css'

const SenderAvatar = (props: { sender: string }) => {
  const { sender } = props
  const iconPath =
    sender === 'user'
      ? `/assets/user.png`
      : `/assets/animal-icons/${sender}.png`

  return <img className="sender-avatar" src={iconPath} alt={sender} />
}

export default SenderAvatar
