import { ListGroup, Col, Stack } from 'react-bootstrap';
import PokemonName from './PokemonName';
import NavButtons from '../NavButtons/NavButtons';
import { usePokemonContext } from '../../context/PokemonContext';

const PokemonList = () => {
  const { pokemonNameList } = usePokemonContext();

  return (
    <ListGroup className='pokemon-list mb-3'>
      {pokemonNameList.map((pokemonName) => {
        return (
          <PokemonName key={pokemonName} pokemonName={pokemonName}/>
        );
      })}
    </ListGroup>

  )
};

export default PokemonList;
