import { Box, Stack, Center, Flex } from '@chakra-ui/react';
import SearchBar from './components/SearchBar/SearchBar';
import Pokemon from './components/Pokemon/Pokemon';
import CaptureButton from './components/CaptureButton/CaptureButton';
import CapturedPokemonList from './components/CapturedPokemonList/CapturedPokemonList';
import { PokemonProvider } from './context/PokemonContext';
import './App.css'


const App = () => {
  return (
    <PokemonProvider>
      <Center h='100vh'>
        <Box w='full'>
          <Stack direction='row' spacing={5} justifyContent='center'>
            <Flex
              flexDirection='column'
              alignItems='center'
              borderWidth={3}
              rounded='xl'
              borderColor='white'
              p={4}
              bg='#222'
            >
              <SearchBar />
              <Pokemon />
              <CaptureButton />
            </Flex>

            <Flex
              flexDirection='column'
              alignItems='center'
              minHeight='580px'
              minWidth='150px'
              borderWidth={3}
              rounded='xl'
              borderColor='white'
              p={3}
              bg='#222'
              pos='relative'
              left='-4px'
            >
              <CapturedPokemonList />
            </Flex>
          </Stack>
        </Box>
      </Center>
    </PokemonProvider>
  )
}

export default App;
