import { useState, useRef } from 'react'
import './App.css'
import {
  Box,
  Button,
  HStack,
  Input,
  Stack,
  Image,
  Text,
  Badge,
  Center,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';

const MAX_CAPTURED_POKEMONS_NUM = 6;

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const inputRef = useRef('');
  const isCaptureButtonDisabled = pokemons.length >= MAX_CAPTURED_POKEMONS_NUM;

  const fetchPokemons = async (query) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);  
      const data = await req.json();
      setPokemon(data);
      
    } catch (err) {
      console.error(err);
    }
  };


  const handleCaptureButtonClick = () => {
    if (pokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }
    setPokemons((prevPokemons) => {
      return [...prevPokemons, pokemon];
    });
  };


  const handleInputSearchClick = () => {
    const query = inputRef.current.value;
  
    if (!query || query.trim() === '') {
      return;
    }

    fetchPokemons(query);
    inputRef.current.value = '';
  };
  
  const handlePokemonRemove = (targetIndex) => {
    setPokemons((prevPokemons) => {
      return prevPokemons.filter((_, index) => {
        return index !== targetIndex;
      })
    });
  };

  return (
    <Center h='100vh'>
      <Box w='full' maxWidth='600px'>
        <Stack direction='row' spacing={0}>
          <Stack
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
          >
            <HStack>
              <Input
                borderWidth={4}
                borderColor='red.800'
                bg='white'
                placeholder='name/id'
                ref={inputRef}
              />
              <Button
                onClick={handleInputSearchClick} 
                borderWidth={4} borderColor='red.800'>
                Search
              </Button>
            </HStack>
            <Stack direction='row' spacing={4}>
              <Box>
                <Box bg='gray.100' rounded='lg'>
                  <Image src={pokemon?.sprites?.front_default}/>
                </Box>
              </Box>
              <Stack>
                <Text color='white' fontSize='xl' fontWeight={600}>
                  {pokemon?.name}
                </Text>
                <Text color='white' fontSize='md' fontWeight={600}>
                  #{pokemon?.order}
                </Text>
                <Text color='white'>Type</Text>
                <Box>
                  <Wrap>
                    <WrapItem>
                      {pokemon?.types?.map((item, i) => {  
                        return (
                        <Badge key={i} borderWidth={3} rounded='md' borderColor='red.800'>
                          {item?.type?.name}
                        </Badge>
                      )
                      })}
                    </WrapItem>
                  </Wrap>
                </Box>
                <HStack color='white'>
                  <Stack>
                    <Text>HP</Text>
                    <Text>{pokemon?.stats[0]?.base_stat}</Text>
                  </Stack>
                  <Stack>
                    <Text>Attack</Text>
                    <Text>{pokemon?.stats[1]?.base_stat}</Text>
                  </Stack>
                  <Stack>
                    <Text>Defense</Text>
                    <Text>{pokemon?.stats[2]?.base_stat}</Text>
                  </Stack>
                  <Stack>
                    <Text>Speed</Text>
                    <Text>{pokemon?.stats[3]?.base_stat}</Text>
                  </Stack>
                </HStack>
                <Box>
                  <Button
                    isDisabled={isCaptureButtonDisabled}
                    onClick={handleCaptureButtonClick} 
                    w='full' borderWidth={4} borderColor='red.800'>
                    Capture
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
            spacing={2}
            pos='relative'
            left='-4px'
          >
            <Box bg='gray.100' rounded='lg'>
              { pokemons.map((pokemon, i) => {
                return (
                  <Image
                    onClick={() => { handlePokemonRemove(i)}} 
                    key={i} 
                    src={pokemon?.sprites?.front_default}/>  
                )}
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default App;
