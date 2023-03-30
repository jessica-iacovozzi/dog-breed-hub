import { Card, CardBody, Heading, HStack, Text } from "@chakra-ui/react"
import StarRatings from "react-star-ratings"
import { DogBreed } from "../hooks/useDogBreeds";

interface Props {
  dogBreed: DogBreed;
}

const DogBreedReverseCard = ({ dogBreed }: Props) => {
  const attributeMap = {
    energy: 'Energy',
    barking: 'Barking',
    shedding: 'Shedding',
    grooming: 'Grooming',
    trainability: 'Trainability',
    playfulness: 'Playfulness',
    protectiveness: 'Protectiveness',
    good_with_children: 'Kid friendly',
    good_with_other_dogs: 'Dog friendly'
  }

  return (
    <Card className='card-back' height='490px'>
      <CardBody textAlign='center' display='flex' flexDirection='column' justifyContent='space-between'>
        <Heading fontSize='3xl'>{dogBreed.name} breed characteristics</Heading>
        <div>
          <HStack marginTop={5} justifyContent='space-between'>
            <Text fontSize={19}>Energy </Text>
            <StarRatings
              rating={dogBreed.energy}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Barking </Text>
            <StarRatings
              rating={dogBreed.barking}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Shedding </Text>
            <StarRatings
              rating={dogBreed.shedding}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Grooming </Text>
            <StarRatings
              rating={dogBreed.grooming}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Trainability </Text>
            <StarRatings
              rating={dogBreed.trainability}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Playfulness </Text>
            <StarRatings
              rating={dogBreed.playfulness}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Protectivess </Text>
            <StarRatings
              rating={dogBreed.protectiveness}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Kid friendly </Text>
            <StarRatings
              rating={dogBreed.good_with_children}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
          <HStack marginTop={2} justifyContent='space-between'>
            <Text fontSize={19}>Dog friendly </Text>
            <StarRatings
              rating={dogBreed.good_with_other_dogs}
              starRatedColor="#BD4F5B"
              numberOfStars={5}
              starDimension="25px"
              svgIconPath="M 55.5 288.847656 C 52.136719 312.070312 65.285156 332.558594 85.246094 337.859375 C 106.566406 343.535156 126.289062 328.636719 134.683594 312.71875 C 140.761719 301.199219 141.699219 287.625 137.722656 275.019531 C 134.816406 265.78125 137.246094 255.6875 144.09375 248.84375 L 251.1875 141.75 C 257.710938 135.226562 267.410156 133.324219 276.039062 136.550781 C 297.171875 144.449219 320.632812 137.757812 331.964844 121.277344 C 343.433594 104.613281 341.800781 78.960938 326.105469 64.300781 C 312.003906 51.152344 293.199219 53.035156 290.074219 53.410156 C 290.429688 50.285156 292.332031 31.480469 279.183594 17.378906 C 264.523438 1.664062 238.871094 0.0351562 222.203125 11.519531 C 205.742188 22.847656 199.03125 46.308594 206.933594 67.441406 C 210.160156 76.074219 208.257812 85.789062 201.734375 92.296875 L 94.640625 199.390625 C 87.792969 206.234375 77.703125 208.683594 68.460938 205.761719 C 55.855469 201.785156 42.285156 202.71875 30.765625 208.800781 C 14.847656 217.191406 -0.0351562 236.917969 5.625 258.238281 C 10.941406 278.214844 32.277344 292.195312 55.5 288.847656 Z M 55.5 288.847656 "
              svgIconViewBox="0 0 343.5 343.500003"
            />
          </HStack>
        </div>
      </CardBody>
    </Card>
  )
}

export default DogBreedReverseCard