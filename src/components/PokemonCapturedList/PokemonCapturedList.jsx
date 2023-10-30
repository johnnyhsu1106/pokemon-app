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
        <Stack
          className='mt-3 justify-content-end' 
          direction='horizontal' 
          gap={3}>
          <p className='my-0'>Pocket Max {MAX_CAPTURED_POKEMONS_NUM} </p>
          <Button
            className='w-25' 
            variant='outline-danger'
            onClick={handlePokemonsClear}
          >
            Clear
          </Button>
        </Stack>
        <Stack
          className='mx-auto my-3 align-items-center' 
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
