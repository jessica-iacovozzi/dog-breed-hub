import { Text } from '@chakra-ui/react'
import useDogBreeds from '../hooks/useDogBreeds';

const DogBreedGrid = () => {
  const { dogBreeds, error } = useDogBreeds();

  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {dogBreeds.map(breed => <li key={breed.name}>{breed.name}</li>)}
    </ul>
    </>
  )
}

export default DogBreedGrid;
