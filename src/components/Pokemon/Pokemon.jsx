import { Stack } from '@chakra-ui/react';
import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonOrder from './PokemonOrder';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';

const Pokemon = ({
  pokemon, 
  error
}) => {
  const {
    name,
    order,
    image,
    types,
    stats,
  } = pokemon;

  if (error) {
    return <h1>{error}</h1>;
  }

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
