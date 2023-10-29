import { Stack } from 'react-bootstrap';
import CapturedPokemon from './CapturedPokemon';
import { usePokemonContext } from '../../context/PokemonContext';


const CapturedPokemonList = () => {
  const { capturedPokemons,  MAX_CAPTURED_POKEMONS_NUM } = usePokemonContext();
  return (
    <Stack className='d-flex flex-column align-items-center' gap={2}>
      <h3>Pocket</h3>
      <p>Max {MAX_CAPTURED_POKEMONS_NUM} </p>
      { capturedPokemons.map((capturedPokemon) => {
        return (
          <CapturedPokemon key={capturedPokemon.capturedId} capturedPokemon={capturedPokemon} />
        )}
      )}
    </Stack>
  )
}

export default CapturedPokemonList
