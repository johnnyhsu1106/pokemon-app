import { Button } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';
import PropTypes from 'prop-types';


const PokemonNavItem = ({ pokemonNavName }) => {
  const { 
    selectedPokemonName,
    handlePokemonSelect 
  } = usePokemonContext();

  return (
    <Button
      variant='outline-light'
      className= {`mt-1 pokeomn-nav-item text-capitalize ${pokemonNavName === selectedPokemonName ? 'selected' : ''}`}
      onClick={() => { handlePokemonSelect(pokemonNavName)} }
    >
      {pokemonNavName}
    </Button>
  )
};

PokemonNavItem.propTypes = {
  pokemonNavName: PropTypes.string.isRequired
};

export default PokemonNavItem;
