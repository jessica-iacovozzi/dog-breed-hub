import { DogBreed } from "../hooks/useDogBreeds";
import DogBreedCard from "./DogBreedCard"
import DogBreedReverseCard from "./DogBreedReverseCard"

interface Props {
  dogBreed: DogBreed;
}

const FlipCard = ({ dogBreed }:Props) => {

  return (
    <div className="card">
      <DogBreedCard dogBreed={dogBreed} />
      <DogBreedReverseCard dogBreed={dogBreed} />
    </div>
  )
}

export default FlipCard
