import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack width='max-content' whiteSpace='nowrap'>
      <Switch colorScheme='red' isChecked={colorMode === 'dark'} onChange={toggleColorMode} aria-label='Dark mode toggle' />
      <Text>Dark Mode</Text>
    </HStack>
    )
}

export default ColorModeSwitch
