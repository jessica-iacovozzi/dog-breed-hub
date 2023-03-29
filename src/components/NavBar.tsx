import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/donut-dog-hub-icon.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding='10px 20px' width='100%'>
      <HStack>
        <Image src={logo} boxSize='75px' />
        {/* <Text fontSize='xl' fontWeight='bold' whiteSpace='nowrap'>Dog Breed Hub</Text> */}
      </HStack>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
