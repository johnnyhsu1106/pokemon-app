import { Button } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonNavItem = ({ pokemonNavName }) => {
  const { 
    selectedPokemonName,
    handlePokemonSelect 
  } = usePokemonContext();

  return (
    <Button
      variant='outline-light'
      className= {`mt-1 pokeomn-nav-item text-capitalize ${pokemonNavName === selectedPokemonName ? 'selected' : ''}`}
      onClick={() => { handlePokemonSelect(pokemonNavName)}}
    >
      {pokemonNavName}
    </Button>
  )
}

export default PokemonNavItem;
