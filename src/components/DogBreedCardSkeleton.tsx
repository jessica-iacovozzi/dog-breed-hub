import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const DogBreedCardSkeleton = () => {
  return (
    <Card width='100%' borderRadius={10} overflow='hidden'>
      <Skeleton height='135px' />
      <CardBody>
        <SkeletonText height='400px'/>
      </CardBody>
    </Card>
  )
}

export default DogBreedCardSkeleton
