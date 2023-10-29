import { Image } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const CapturedPokemon = ({ capturedPokemon} ) => {
  const { 
    handlePokemonRemove,
    handlePokemonInspect
   } = usePokemonContext();

  return (
    <div className='captured-pokemon'>
      <Image
        className='captured-pokemon'
        src={capturedPokemon.thumbnail}
        onClick={() => { handlePokemonInspect(capturedPokemon.id)}}
      />
      <button
        onClick={() => { handlePokemonRemove(capturedPokemon.capturedId) }}  
        className='delete-btn'
        >
        &times;
      </button>
    </div>
  )
};

export default CapturedPokemon;
