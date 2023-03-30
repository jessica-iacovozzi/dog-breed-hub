import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { DogBreed } from "../hooks/useDogBreeds";

interface Props {
  dogBreed: DogBreed;
}

const DogBreedCard = ({ dogBreed }: Props) => {
  return (
    <Card className='card-front'>
      <Image height='50%' objectFit='cover' className="dog-image" src={dogBreed.image_link} />
      <CardBody height='50%' textAlign='center' display='flex' flexDirection='column' justifyContent='space-between'>
        <Heading fontSize='3xl'>{dogBreed.name}</Heading>
        <div>
          <HStack marginTop={5} justifyContent='space-between'>
            <Text fontSize={18}>Life expectancy </Text>
            <Text fontSize={18}>{dogBreed.min_life_expectancy}-{dogBreed.max_life_expectancy} yrs.</Text>
          </HStack>
          <HStack marginTop={1} justifyContent='space-between'>
            <Text fontSize={18}>Weight (female) </Text>
            <Text fontSize={18}>{dogBreed.min_weight_female}-{dogBreed.max_weight_female} lb</Text>
          </HStack>
          <HStack marginTop={1} justifyContent='space-between'>
            <Text fontSize={18}>Weight (male) </Text>
            <Text fontSize={18}>{dogBreed.min_weight_male}-{dogBreed.max_weight_male} lb</Text>
          </HStack>
          <HStack marginTop={1} justifyContent='space-between'>
            <Text fontSize={18}>Height (female) </Text>
            <Text fontSize={18}>{dogBreed.min_height_female}-{dogBreed.max_height_female} in</Text>
          </HStack>
          <HStack marginTop={1} justifyContent='space-between'>
            <Text fontSize={18}>Height (male) </Text>
            <Text fontSize={18}>{dogBreed.min_height_male}-{dogBreed.max_height_male} in</Text>
          </HStack>
        </div>
      </CardBody>
    </Card>
  )
}

export default DogBreedCard
