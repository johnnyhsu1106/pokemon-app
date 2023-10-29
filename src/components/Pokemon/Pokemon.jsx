import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonOrder from './PokemonOrder';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';
import { usePokemonContext } from '../../context/PokemonContext';
import { Col } from 'react-bootstrap';

const Pokemon = () => {
  const { 
    pokemon,
    isError 
  } = usePokemonContext();
  
  const {
    image,
    name,
    order,
    types,
    stats,
  } = pokemon;

  if (isError) {
    return <p className='error-msg'>Couldn't find this Pokemon</p>;
  };

  return ( 
    <Col className='d-flex flex-column align-items-center justify-content-between'>
      <PokemonImage image={image} />
      <PokemonName name={name} />
      <PokemonOrder order={order} />
      <PokemonTypes types={types} />
      <PokemonStatsList stats={stats} />
    </Col>
  )
}

export default Pokemon
