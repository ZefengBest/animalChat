import React from 'react'
import SelectableAnimal from '../components/SelectableAnimal'

const AnimalSelectionPage = () => (
  <>
    <div>Animal Selection Page</div>
    <SelectableAnimal name="cat" />
    <SelectableAnimal name="dog" />
  </>
)

export default AnimalSelectionPage
