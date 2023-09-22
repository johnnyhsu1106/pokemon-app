import { Stack } from '@chakra-ui/react';
import PokemonImage from './PokemonImage';
import PokemonName from './PokemonName';
import PokemonOrder from './PokemonOrder';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';

const Pokemon = ({
  pokemon
}) => {
  const {
    name,
    order,
    image,
    types,
    stats
  } = pokemon;

  return ( 
    <Stack direction='row' spacing={4} minHeight='500px'>
      <PokemonImage image={image} />
      <Stack>
        <PokemonName name={name} />
        <PokemonOrder order={order} />
        <PokemonTypes types={types} />
        <PokemonStatsList stats={stats} />
      </Stack>
    </Stack>
  )
}

export default Pokemon
