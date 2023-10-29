import { ListGroup } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonName = ({ pokemonName }) => {
  const { 
    handlePokemonSelect 
  } = usePokemonContext();

  return (
    <ListGroup.Item 
      variant='primary'
      className='mt-1 pokemon-list-item'
      onClick={() => { handlePokemonSelect(pokemonName)}}
    >
      {pokemonName}
    </ListGroup.Item>
  )
}

export default PokemonName;
