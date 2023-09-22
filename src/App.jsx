import { useState } from 'react'
import {
  Box,
  Stack,
  Center
} from '@chakra-ui/react';

import SearchBar from './components/SearchBar/SearchBar';
import Pokemon from './components/Pokemon/Pokemon';
import CaptureButton from './components/CaptureButton/CaptureButton';
import CapturedPokemonList from './components/CapturedPokemonList/CapturedPokemonList';
import './App.css'

const MAX_CAPTURED_POKEMONS_NUM = 6;


function App() {
  const [pokemon, setPokemon] = useState({});
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const isCaptureButtonDisabled = capturedPokemons.length >= MAX_CAPTURED_POKEMONS_NUM;

  const fetchPokemon = async (query) => {
    try {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);  
      const data = await req.json();

      setPokemon({
        order: data?.order,
        name: data?.name,
        types: data?.types,
        stats: data?.stats,
        image: data?.sprites?.front_default
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
      <Box w='full' maxWidth='600px'>
        <Stack direction='row' spacing={5} minHeight='500px'>
          <Stack
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
          >
            <SearchBar onClickSearchButton={handleSearchPokemon} />
            <Pokemon
              pokemon={pokemon} 
            />
            <CaptureButton
              isCaptureButtonDisabled={isCaptureButtonDisabled}
              onClickCaptureButton={handleCapturePokemon}
            />
          </Stack>

          <Stack
            minWidth='150px'
            borderWidth={6}
            rounded='xl'
            borderColor='red.800'
            p={4}
            bg='#CE302A'
            spacing={1}
            pos='relative'
            left='-4px'
          >
            <CapturedPokemonList
              removeCapturedPokemon={handlePokemonRemove} 
              capturedPokemons={capturedPokemons} 
            />
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}

export default App;
