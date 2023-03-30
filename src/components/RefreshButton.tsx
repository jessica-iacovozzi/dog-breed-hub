import { Button } from "@chakra-ui/react";
import { HiOutlineRefresh } from 'react-icons/hi';

interface SearchText {
  onSearch: (searchText: string) => void;
}

const RefreshButton = ({ onSearch }:SearchText) => {
  return (
    <Button leftIcon={<HiOutlineRefresh/>} marginLeft={7} onClick={() => onSearch('')}>Refresh</Button>
  )
}

export default RefreshButton
