import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/donut-dog-hub-icon.svg'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='60px' />
      <Text>Dog Breed Hub</Text>
    </HStack>
  )
}

export default NavBar
