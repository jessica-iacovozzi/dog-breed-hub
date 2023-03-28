import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { DogBreed } from "../hooks/useDogBreeds"

interface Props {
  dogBreed: DogBreed;
}

const DogBreedCard = ({ dogBreed }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={dogBreed.image_link} />
      <CardBody>
        <Heading fontSize='2xl'>{dogBreed.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default DogBreedCard
