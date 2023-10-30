import { Stack } from 'react-bootstrap';
import PokemonStats from './PokemonStats';
import { usePokemonContext } from '../../context/PokemonContext';
import { useViewportContext } from '../../context/ViewportContext';


const STATS_NAMES = [
  'Hp', 
  'Attack', 
  'Defense', 
  'Sp Attack', 
  'Sp Defense', 
  'Speed'
];

const PokemonStatsList = ({ stats }) => {
  if (!stats || stats.length === 0) {
    return null;
  }
  const { isMobile } = useViewportContext();
  
  return (
    <Stack
      className='pokemon-stats-list' 
      direction='horizontal' 
      gap={isMobile ? 1  : 3}>
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
