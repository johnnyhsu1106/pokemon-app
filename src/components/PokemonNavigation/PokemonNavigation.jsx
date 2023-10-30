import { Stack } from 'react-bootstrap';
import PokemonNavList from './PokemonNavList';
import PokemonNavButtons from './PokemonNavButtons';


const PokemonNavigation = () => {
  return (
    <Stack gap={2}>
      <PokemonNavList />
      <PokemonNavButtons />
    </Stack>
  );
};

export default PokemonNavigation;
