import { SimpleGrid, Text } from '@chakra-ui/react'
import { BreedQuery } from '../App';
import useDogBreeds from '../hooks/useDogBreeds';
import DogBreedCardSkeleton from './DogBreedCardSkeleton';
import FlipCard from './FlipCard';

interface Props {
  breedQuery: BreedQuery;
}

const DogBreedGrid = ({breedQuery}: Props) => {
  const { dogBreeds, error, isLoading } = useDogBreeds(breedQuery);
  const skeletons = [1, 2, 3 , 4, 5, 6]

  if (error) return <Text textAlign='center'>{error}</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, '2xl': 4, '3xl': 5 }} padding={7} paddingTop='0' spacing={7} justifyItems='center'>
      {isLoading && skeletons.map(skeleton => <DogBreedCardSkeleton key={skeleton} />)}
      {dogBreeds.map(breed =>
        <div className='flippable-card-container'>
          <FlipCard dogBreed={breed}/>
        </div>
      )}
    </SimpleGrid>
  )
}

export default DogBreedGrid;
