import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { BreedQuery } from "../App";
import apiClient from "../services/api-client";

export interface DogBreed {
  name: string;
  image_link: string;
  shedding: number;
  barking: number;
  energy: number;
  protectiveness: number;
  trainability: number;
  grooming: number;
  drooling: number;
  playfulness: number;
  coat_length: number;
  good_with_other_dogs: number;
  good_with_children: number;
  good_with_strangers: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  min_height_female: number;
  min_height_male: number;
  max_height_male: number;
  max_height_female: number;
  min_weight_male: number;
  max_weight_male: number;
  max_weight_female: number;
  min_weight_female: number;
}

const useDogBreeds = (breedQuery: BreedQuery) => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient.get('/dogs', {
      params: {
        name: breedQuery.searchText
      }
     })
      .then(res => {
        setDogBreeds(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError('Please refresh page');
        setLoading(false);
      });

    return () => controller.abort();
  }, [breedQuery])

  return { dogBreeds, error, isLoading }
}

export default useDogBreeds;
