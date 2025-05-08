import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useCallback, useRef, useState } from 'react';
import { BreedQuery } from '../App';
import useDogBreeds from '../hooks/useDogBreeds';
import usePrevious from '../hooks/usePrevious';
import DogBreedCardSkeleton from './DogBreedCardSkeleton';
import FlipCard from './FlipCard';

interface Props {
  breedQuery: BreedQuery;
}

const DogBreedGrid = ({breedQuery}: Props) => {
  const [offset, setOffset] = useState(0);
  const { dogBreeds, error, isLoading, hasMore } = useDogBreeds(breedQuery, offset)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]
  const prevSearch = usePrevious(breedQuery.searchText)
  const intObserver = useRef<IntersectionObserver | null>(null)
  const [isAtTop, setIsAtTop] = useState(true)

  const lastBreedRef = useCallback((breed: Element) => {
    if (isLoading) return
    if (!breed) return
    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prev => prev + 20)
        setIsAtTop(false)
      }
      if (breedQuery.searchText && (prevSearch !== breedQuery.searchText) && window.pageYOffset === 0) {
        setOffset(0)
        setIsAtTop(true)
      }
    }, {
      rootMargin: '100px'
    })
    intObserver.current.observe(breed)
  }, [isLoading, hasMore, breedQuery.searchText] )

  if (error) return <Text textAlign='center'>{error}</Text>

  const content = dogBreeds.map((breed, i) => {
    if (dogBreeds.length === i + 1) {
      return (
        <div key={breed.name || `breed-${i}`} className='flippable-card-container'>
          <FlipCard ref={lastBreedRef} dogBreed={breed}/>
        </div>
      )
    }
    return (
      <div key={breed.name || `breed-${i}`} className='flippable-card-container'>
        <FlipCard dogBreed={breed}/>
      </div>
    )
  })

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3, '2xl': 4, '3xl': 5 }} padding={7} paddingTop='0' spacing={7} justifyItems='center'>
        {isAtTop && isLoading && skeletons.map(skeleton => <DogBreedCardSkeleton key={skeleton} />)}
        {content}
      </SimpleGrid>
      {!isAtTop && isLoading && <Spinner size='xl' className='spinner'/>}
    </>
  )
}

export default DogBreedGrid;
