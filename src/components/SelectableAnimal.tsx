import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/animal.css'

const SelectableAnimal = (props: { name: string }) => {
  const { name } = props
  const iconPath = `/assets/animal-icons/${name}.png`

  const navigate = useNavigate()
  const handleSelect = () => {
    navigate(`/chat/${name}`)
  }

  return (
    <img
      className="animal-icon"
      src={iconPath}
      alt={name}
      onClick={handleSelect}
    />
  )
}

export default SelectableAnimal
