import { Button } from "@chakra-ui/react";
import { HiOutlineRefresh } from 'react-icons/hi';

const RefreshButton = () => {
  return (
    <Button leftIcon={<HiOutlineRefresh/>} className='refresh' onClick={
      () => window.location.reload()
    }>Refresh</Button>
  )
}

export default RefreshButton
