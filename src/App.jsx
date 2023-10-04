import { useEffect, useState } from 'react'
import {
  Box,
  Stack,
  Center,
  Flex
} from '@chakra-ui/react';

import SearchBar from './components/SearchBar/SearchBar';
import Pokemon from './components/Pokemon/Pokemon';
import CaptureButton from './components/CaptureButton/CaptureButton';
import CapturedPokemonList from './components/CapturedPokemonList/CapturedPokemonList';
import './App.css'

const MAX_CAPTURED_POKEMONS_NUM = 5;


function App() {
  const [pokemon, setPokemon] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM;
  
  useEffect(() => {
    fetchPokemon(1);
  }, []);

  const fetchPokemon = async (query) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`); 

      const data = await req.json();

      setPokemon({
        image: data?.sprites?.front_default,
        name: data?.name,
        order: data?.order,
        types: data?.types,
        stats: data?.stats
      });
      
    } catch (err) {
      console.error(err);
    }
  };


  const handleCapturePokemon = () => {
    if (capturedPokemons.length > MAX_CAPTURED_POKEMONS_NUM) {
      return;
    }

    setCapturedPokemons((prevCapturedPokemons) => {
      return [...prevCapturedPokemons, pokemon];
    });
  };


  const handleSearchPokemon = (query) => {
    if (!query || query.trim() === '') {
      return;
    }

    fetchPokemon(query);
  };
  
  const handlePokemonRemove = (targetIndex) => {
    setCapturedPokemons((prevCapturedPokemons) => {
      return prevCapturedPokemons.filter((_, index) => {
        return index !== targetIndex;
      })
    });
  };

  return (
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
            <SearchBar onSubmitSearchForm={handleSearchPokemon} />
            <Pokemon {...pokemon} />
            <CaptureButton
                isDisabled={isCaptureButtonDisabled}
                onClick={handleCapturePokemon}
              />
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
            spacing={3}
            pos='relative'
            left='-4px'
          >
            <CapturedPokemonList
              removeCapturedPokemon={handlePokemonRemove} 
              capturedPokemons={capturedPokemons} 
            />
          </Flex>
        </Stack>
      </Box>
    </Center>
  )
}

export default App;
