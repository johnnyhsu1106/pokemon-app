import { Stack } from '@chakra-ui/react';
import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonOrder from './PokemonOrder';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';
import { usePokemonContext } from '../../context/PokemonContext';

const Pokemon = () => {
  const { pokemon } = usePokemonContext();
  const {
    image,
    name,
    order,
    types,
    stats,
  } = pokemon;
  return ( 
    <>
      <PokemonImage image={image} />
      <Stack mb={5}>
        <PokemonName name={name} />
        <PokemonOrder order={order} />
        <PokemonTypes types={types} />
        <PokemonStatsList stats={stats} />
      </Stack>
    </>
  )
}

export default Pokemon
