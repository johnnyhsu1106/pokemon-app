import { Card } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';
import { useViewportContext } from '../../context/ViewportContext';
import PropType from 'prop-types';


const PokemonCapturedItem = ({ capturedPokemon} ) => {
  const { 
    handlePokemonRemove,
    handlePokemonInspect
   } = usePokemonContext();

  const { isMobile } = useViewportContext();
  const {
    capturedId,
    name,
    thumbnail
  } = capturedPokemon;

  return (
    <Card className='captured-pokemon bg-dark text-white text-center'>
      <Card.Img
        className='captured-pokemon'
        src={thumbnail}
        onClick={() => handlePokemonInspect(name)}
      />
      {!isMobile && <Card.Text className='mb-1 text-capitalize'>{name}</Card.Text>}
      <button
        onClick={() => handlePokemonRemove(capturedId)}  
        className='delete-btn'
      >
        &times;
      </button>
    </Card>
  )
};

PokemonCapturedItem.propTypes = {
  capturedPokemon: PropType.shape({
    capturedId: PropType.string,
    name: PropType.string,
    thumbnail: PropType.string
  }).isRequired
};

export default PokemonCapturedItem;
