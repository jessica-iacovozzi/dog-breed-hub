import { SimpleGrid, Text } from '@chakra-ui/react'
import useDogBreeds from '../hooks/useDogBreeds';
import DogBreedCard from './DogBreedCard';

const DogBreedGrid = () => {
  const { dogBreeds, error } = useDogBreeds();

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding='20px' spacing={15}>
      {dogBreeds.map(breed =>
        <DogBreedCard key={breed.name} dogBreed={breed} />
      )}
    </SimpleGrid>
    </>
  )
}

export default DogBreedGrid;
