import { Button, Stack } from 'react-bootstrap';
import PokemonCapturedItem from './PokemonCapturedItem';
import { usePokemonContext } from '../../context/PokemonContext';
import useViewport from '../../hooks/useViewport';


const PokemonCapturedList = () => {
  const { 
    isMobile,
    capturedPokemons,  
    MAX_CAPTURED_POKEMONS_NUM,
    handlePokemonsClear 
  } = usePokemonContext();

  if (isMobile) {
    return (
      <>
        <p className='mt-3 mb-0'>Pocket Max {MAX_CAPTURED_POKEMONS_NUM} </p>
        <Stack
          className='my-3 flex-wrap align-items-center' 
          direction='horizontal'
          gap={2}
        >
        { capturedPokemons.map((capturedPokemon) => {
          return (
            <PokemonCapturedItem 
              key={capturedPokemon.capturedId} 
              capturedPokemon={capturedPokemon} 
            />
          )}
        )}
        </Stack>
        <Button
          className='w-25 mx-auto' 
          variant='outline-danger'
          onClick={handlePokemonsClear}
        >
          Clear
        </Button>
      </>
    )
  }
  

  return (
    <>
      <h3>Pocket</h3>
      <p>Max {MAX_CAPTURED_POKEMONS_NUM} </p>
        
      <Stack
        className='py-3 my-3 align-items-center border border-light' 
        direction='vertical'
        gap={2}
      >
        { capturedPokemons.map((capturedPokemon) => {
          return (
            <PokemonCapturedItem 
              key={capturedPokemon.capturedId} 
              capturedPokemon={capturedPokemon} 
            />
          )}
        )}
      </Stack>

      <Button
        className='w-50' 
        variant='danger'
        onClick={handlePokemonsClear}
      >
        Clear
      </Button>
    </>
  )
}

export default PokemonCapturedList
