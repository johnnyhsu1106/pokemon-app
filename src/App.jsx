import { Row, Col, Container, Stack } from 'react-bootstrap';
import PokemonNameList from './components/PokemonNameList/PokemonNameList';
import NavButtons from './components/NavButtons/NavButtons';
import SearchBar from './components/SearchBar/SearchBar';
import Pokemon from './components/Pokemon/Pokemon';
import CaptureButton from './components/CaptureButton/CaptureButton';
import CapturedPokemonList from './components/CapturedPokemonList/CapturedPokemonList';
import { PokemonProvider } from './context/PokemonContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <PokemonProvider>
      <Container className='d-flex flex-column justify-content-center my-5'>
        <SearchBar />
        <Row>
          <Col className='d-flex justify-content-center align-items-stretch'>
            <Stack gap={3}>
              <PokemonNameList />
              <NavButtons />
            </Stack>
          </Col>  
          <Col className=''>
            <Pokemon />
            <CaptureButton />
          </Col>
          <Col className=''>
            <CapturedPokemonList />
          </Col>
        </Row>
      </Container>
    </PokemonProvider>
  )
}

export default App;
