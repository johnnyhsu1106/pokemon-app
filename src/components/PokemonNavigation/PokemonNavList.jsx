import { ButtonGroup } from 'react-bootstrap';
import PokemonNavItem from './PokemonNavItem'
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonNavList = () => {
  const { pokemonNavNames } = usePokemonContext();

  return (
    <ButtonGroup vertical size='sm'
      className='mb-3'
    >
      {pokemonNavNames.map((pokemonNavName) => {
        return (
          <PokemonNavItem key={pokemonNavName} pokemonNavName={pokemonNavName}/>
        );
      })}
    </ButtonGroup>

  )
};

export default PokemonNavList;
