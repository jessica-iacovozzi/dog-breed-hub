import { CanceledError } from "axios";
import { useEffect, useState } from "react";
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
}

const useDogBreeds = () => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient.get('/dogs', { signal: controller.signal })
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
  }, [])

  return { dogBreeds, error, isLoading }
}

export default useDogBreeds;
