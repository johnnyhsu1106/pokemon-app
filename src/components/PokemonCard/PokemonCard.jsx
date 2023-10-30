import { Card, Button } from 'react-bootstrap';
import PokemonTypes from './PokemonTypes';
import PokemonStatsList from './PokemonStatsList';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonCard = () => {
  const { 
    pokemon,
    isError,
    isCaptureButtonDisabled,
    handlePokemonCapture
  } = usePokemonContext();
  

  if (isError) {
    return (
      <p className='text-center'>Couldn't find this Pokemon</p>
    ) 
  };

  return ( 
    <Card className='bg-dark text-white'>
      <Card.Img variant='top' src={pokemon?.image} />
      <Card.Body>
        <Card.Title className='text-capitalize text-center'>{pokemon?.name || ''}</Card.Title>
        <Card.Text>Order: {pokemon?.order}</Card.Text>
        <PokemonTypes types={pokemon?.types || []} />
        <PokemonStatsList stats={pokemon?.stats || []} />
        <Button
          className='w-100 mt-4'
          variant={`${isCaptureButtonDisabled ? 'light' : 'success'}`}
          disabled={isCaptureButtonDisabled}
          onClick={isCaptureButtonDisabled ? () => {} : handlePokemonCapture} 
        >
          {isCaptureButtonDisabled ? 'Pocket is full' : 'Capture'}
      </Button>
      </Card.Body>
    </Card>

  )
}

export default PokemonCard;
