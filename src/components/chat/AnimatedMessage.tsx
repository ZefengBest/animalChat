import React from 'react'
import SenderAvatar from './SenderAvatar'
import { TypeAnimation } from 'react-type-animation'

const AnimatedMessage = (props: { sender: string; text: string }) => {
  const { sender, text } = props
  const [animationComplete, setAnimationComplete] = React.useState(false)
  const animalSoundMap: Map<string, string> = new Map()
  animalSoundMap.set('cat', 'Meow~')
  animalSoundMap.set('dinosaur', 'Roar!')
  animalSoundMap.set('dog', 'Woof!')
  animalSoundMap.set('elephant', 'Trumpet!')
  animalSoundMap.set('frog', 'Ribbit!')
  animalSoundMap.set('hen', 'Cluck!')
  animalSoundMap.set('horse', 'Neigh!')
  animalSoundMap.set('lion', 'Roar!')
  animalSoundMap.set('shark', 'Dun dun...')

  React.useEffect(() => {
    const animalSoundFile = new Audio('/assets/animal-sounds/cat.wav')
    animalSoundFile.play()
  }, [])

  const getAnimalSound = (animal: string): string => {
    if (animalSoundMap.has(animal)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return animalSoundMap.get(animal)!
    } else {
      return 'XXX...'
    }
  }
  const getMessage = (): JSX.Element => {
    if (!animationComplete) {
      return (
        <TypeAnimation
          sequence={[
            getAnimalSound(sender),
            1000,
            text,
            () => {
              setAnimationComplete(true)
            }
          ]}
          cursor={true}
          wrapper="span"
          className="flex-grow-1 py-3"
        />
      )
    } else {
      return <p className="flex-grow-1 py-3">{text}</p>
    }
  }

  return (
    <div className="my-3 d-flex flex-row">
      <SenderAvatar sender={sender} />
      {getMessage()}
    </div>
  )
}

export default AnimatedMessage
