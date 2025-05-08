import { Heading } from "@chakra-ui/react";
import { BreedQuery } from "../App";

interface Props {
  breedQuery: BreedQuery;
}

const DogBreedHeading = ({ breedQuery }:Props) => {
  const heading = breedQuery.searchText ? `${breedQuery.searchText.toUpperCase()} BREEDS` : null

  if (!heading) return null;

  return (
    <Heading textAlign='center' marginY={8}>{heading}</Heading>
  )
}

export default DogBreedHeading
