import { Stack } from 'react-bootstrap';
import PokemonType from './PokemonType';
import PropTypes from 'prop-types';


const PokemonTypes = ({ types }) => {
  if (!types || types.length === 0) {
    return null;
  }

  return (
    <Stack 
      className='mb-3'
      direction='horizontal' 
      gap={3} >
      {types.map((item, i) => {  
        return (
          <PokemonType
            key={i}
            type={item?.type?.name}
          /> 
        )
      })}
    </Stack>
  )
};

PokemonTypes.propTypes = {
  types: PropTypes.array.isRequired
};

export default PokemonTypes
