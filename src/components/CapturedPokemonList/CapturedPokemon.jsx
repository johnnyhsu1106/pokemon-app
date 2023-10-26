import { Image, WrapItem } from '@chakra-ui/react';
import { usePokemonContext } from '../../context/PokemonContext';


const CapturedPokemon = ({ capturedPokemon} ) => {
  const { handlePokemonRemove } = usePokemonContext();

  return (
    <WrapItem
      position='relative'>
      <Image
        m='auto'
        className='captured-pokemon'
        src={capturedPokemon.image}/>
      <div
        onClick={() => { handlePokemonRemove(capturedPokemon.id) }}  
        className='delete-btn'>
          &times;
      </div>
    </WrapItem>
  )
};

export default CapturedPokemon;
