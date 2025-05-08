import { Input, InputGroup, InputLeftElement, Button, VisuallyHidden } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export interface SearchText {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }:SearchText) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form role='search' onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        onSearch(ref.current.value)
      }
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} variant='filled' placeholder='Search dog breeds...' aria-label='Search dog breeds' />
        <VisuallyHidden>
          <Button type="submit" aria-label="Search">Search</Button>
        </VisuallyHidden>
      </InputGroup>
    </form>
  )
}

export default SearchInput
