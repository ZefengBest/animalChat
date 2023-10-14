import React from 'react'
import { useNavigate } from 'react-router-dom'

const SelectableAnimal = (props: { name: string }) => {
  const { name } = props
  const iconPath = `/assets/animal-icons/${name}.png`

  const navigate = useNavigate()
  const handleSelect = () => {
    navigate(`/chat/${name}`)
  }

  return <img src={iconPath} alt={name} onClick={handleSelect} />
}

export default SelectableAnimal
