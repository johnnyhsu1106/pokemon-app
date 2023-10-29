import { Badge, Stack } from 'react-bootstrap';


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

export default PokemonStats;
