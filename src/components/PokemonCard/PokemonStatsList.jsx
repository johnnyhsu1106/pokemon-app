import { Stack } from 'react-bootstrap';
import PokemonStats from './PokemonStats';


const STATS_NAMES = [
  'Hp', 
  'Attack', 
  'Defense', 
  'Sp Attack', 
  'Sp Defense', 
  'Speed'
];

const PokemonStatsList = ({ stats }) => {
  if (!stats) {
    return null;
  }
  
  return (
    <Stack direction='horizontal' gap={3}>
      {
      STATS_NAMES.map((STATS_NAME, i) => {
        return (
          <PokemonStats 
            key={i} 
            name={STATS_NAME} 
            baseStats={ stats[i].base_stat} 
          />
      )})
    }
    </Stack>
  )
}

export default PokemonStatsList;
