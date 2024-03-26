import { Badge, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PokemonStats = ({
  name, 
  baseStats
}) => {

  return (
    <Stack direction='vertical' gap={1} className='text-center'>
      <Badge pill bg="light" text="dark">{name}</Badge>
      <p>{baseStats}</p>
    </Stack>
  )
}

PokemonStats.propTypes = {
  name: PropTypes.string.isRequired,
  baseStats: PropTypes.number.isRequired
};

export default PokemonStats;
