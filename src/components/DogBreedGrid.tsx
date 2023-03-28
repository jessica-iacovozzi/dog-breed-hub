import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient';
import { Text } from '@chakra-ui/react'

interface DogBreed {
  name: string;
}

const DogBreedGrid = () => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get('/dogs')
      .then(res => setDogBreeds(res.data))
      .catch(err => setError(err.message));
  }, [])
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
