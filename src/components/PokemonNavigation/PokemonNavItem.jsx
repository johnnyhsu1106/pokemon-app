import { Button } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonNavItem = ({ pokemonName }) => {
  const { 
    selectedPokemonName,
    handlePokemonSelect 
  } = usePokemonContext();

  return (
    <Button
      variant='outline-light'
      className= {`mt-1 pokeomn-nav-item text-capitalize ${pokemonName === selectedPokemonName ? 'selected' : ''}`}
      onClick={() => { handlePokemonSelect(pokemonName)}}
    >
      {pokemonName}
    </Button>
  )
}

export default PokemonNavItem;
