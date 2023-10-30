import { ButtonGroup } from 'react-bootstrap';
import PokemonNavItem from './PokemonNavItem'
import { usePokemonContext } from '../../context/PokemonContext';


const pokemonNames = () => {
  const { pokemonNames } = usePokemonContext();

  return (
    <ButtonGroup vertical size='sm'
      className='mb-3'
    >
      {pokemonNames.map((pokemonName) => {
        return (
          <PokemonNavItem key={pokemonName} pokemonName={pokemonName}/>
        );
      })}
    </ButtonGroup>

  )
};

export default pokemonNames;
