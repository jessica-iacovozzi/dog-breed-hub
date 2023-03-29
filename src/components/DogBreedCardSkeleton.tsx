import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const DogBreedCardSkeleton = () => {
  return (
    <Card width='350px' borderRadius={10} overflow='hidden' marginTop='50px'>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText height='400px'/>
      </CardBody>
    </Card>
  )
}

export default DogBreedCardSkeleton
