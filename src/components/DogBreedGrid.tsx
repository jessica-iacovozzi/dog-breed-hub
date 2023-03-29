import { SimpleGrid, Text } from '@chakra-ui/react'
import { BreedQuery } from '../App';
import useDogBreeds from '../hooks/useDogBreeds';
import DogBreedCard from './DogBreedCard';
import DogBreedCardSkeleton from './DogBreedCardSkeleton';

interface Props {
  breedQuery: BreedQuery;
}

const DogBreedGrid = ({breedQuery}: Props) => {
  const { dogBreeds, error, isLoading } = useDogBreeds(breedQuery);
  const skeletons = [1, 2, 3 , 4, 5, 6]

  if (error) return <Text textAlign='center'>{error}</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, '2xl': 4 }} padding={7} paddingTop='0' spacing={7} justifyItems='center'>
      {isLoading && skeletons.map(skeleton => <DogBreedCardSkeleton key={skeleton} />)}
      {dogBreeds.map(breed =>
        <DogBreedCard key={breed.name} dogBreed={breed} />
      )}
    </SimpleGrid>
  )
}

export default DogBreedGrid;
