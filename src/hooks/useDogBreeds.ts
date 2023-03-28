import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface DogBreed {
  name: string;
}

const useDogBreeds = () => {
  const [dogBreeds, setDogBreeds] = useState<DogBreed[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get('/dogs', { signal: controller.signal })
      .then(res => setDogBreeds(res.data))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    return () => controller.abort();
  }, [])

  return { dogBreeds, error }
}

export default useDogBreeds;
