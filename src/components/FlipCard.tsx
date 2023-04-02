import React from 'react';
import { DogBreed } from "../hooks/useDogBreeds";
import DogBreedCard from "./DogBreedCard"
import DogBreedReverseCard from "./DogBreedReverseCard"

interface Props {
  dogBreed: DogBreed;
}

const FlipCard = React.forwardRef(({ dogBreed }:Props, ref) => {

  const flipCardBody = (
    <>
      <DogBreedCard dogBreed={dogBreed} />
      <DogBreedReverseCard dogBreed={dogBreed} />
    </>
  )

  const content = ref
    ? <div className="card" ref={ref as React.RefObject<HTMLDivElement>}>{flipCardBody}</div>
    : <div className="card">{flipCardBody}</div>

  return content
})

export default FlipCard
