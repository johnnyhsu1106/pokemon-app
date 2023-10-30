import { Stack } from 'react-bootstrap';
import PokemonType from './PokemonType';

const PokemonTypes = ({ types }) => {
  if (!types) {
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
}

export default PokemonTypes
