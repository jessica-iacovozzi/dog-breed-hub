import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import logo from '/donut-dog-hub-icon.svg';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }:Props) => {
  return (
    <HStack padding='15px 20px' width='100%' gap={2}>
      <HStack>
        <Image src={logo} boxSize='75px' />
      </HStack>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
