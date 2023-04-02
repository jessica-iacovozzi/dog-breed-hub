import { Heading } from "@chakra-ui/react"
import { BreedQuery } from "../App";

interface Props {
  breedQuery: BreedQuery;
}

const DogBreedHeading = ({ breedQuery }:Props) => {
  const heading = breedQuery.searchText ? `${breedQuery.searchText.toUpperCase()} BREEDS` : ''

  return (
    <Heading textAlign='center' marginBottom={16}>{heading}</Heading>
  )
}

export default DogBreedHeading
