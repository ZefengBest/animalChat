import React from 'react'
import SelectableAnimal from '../components/SelectableAnimal'
import '../styles/animal.css'

const AnimalSelectionPage = () => {
  const animals = [
    'cat',
    'dinosaur',
    'dog',
    'elephant',
    'frog',
    'hen',
    'horse',
    'lion',
    'shark'
  ]

  return (
    <div className="m-3 d-flex flex-column align-items-center">
      <h1>Select an Animal to Start Chatting</h1>
      <div
        id="animal-icon-container"
        className="d-flex flex-wrap justify-content-around"
      >
        {animals.map((animal) => (
          <SelectableAnimal key={animal} name={animal} />
        ))}
      </div>
    </div>
  )
}

export default AnimalSelectionPage
