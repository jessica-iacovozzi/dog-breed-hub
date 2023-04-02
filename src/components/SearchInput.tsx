import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

export interface SearchText {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }:SearchText) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        onSearch(ref.current.value)
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} variant='filled' placeholder='Search dog breeds...' />
      </InputGroup>
    </form>
  )
}

export default SearchInput
