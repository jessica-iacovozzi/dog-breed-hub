import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/donut-dog-hub-icon.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px 20px'>
      <HStack>
        <Image src={logo} boxSize='60px' />
        <Text>Dog Breed Hub</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
