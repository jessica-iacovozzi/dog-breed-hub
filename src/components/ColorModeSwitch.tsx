import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack>
      <Switch colorScheme='red' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
    )
}

export default ColorModeSwitch
