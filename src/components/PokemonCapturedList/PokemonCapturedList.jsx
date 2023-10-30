import { Button, Stack } from 'react-bootstrap';
import PokemonCapturedItem from './PokemonCapturedItem';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonCapturedList = () => {
  const { 
    capturedPokemons,  
    MAX_CAPTURED_POKEMONS_NUM,
    handlePokemonsClear 
  } = usePokemonContext();
  
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
