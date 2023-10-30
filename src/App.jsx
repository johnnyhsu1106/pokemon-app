import { Row, Col, Container } from 'react-bootstrap';
import { PokemonProvider } from './context/PokemonContext';
import PokemonSearchBar from './components/PokemonSearchBar/PokemonSearchBar';
import PokemonNavigation from './components/PokemonNavigation/PokemonNavigation';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonCapturedList from './components/PokemonCapturedList/PokemonCapturedList';
import useViewport from './hooks/useViewport';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const width = useViewport();

  if (width <= 640) {
    return (
      <PokemonProvider>
        <Container className='d-flex flex-column justify-content-center my-3 vh-100'>
          <PokemonSearchBar />
          <PokemonCard />
          <PokemonCapturedList />
        </Container>
      </PokemonProvider>
    )
  }

  return (
      <PokemonProvider>
        <Container className='d-flex flex-column justify-content-center vh-100'>
          <PokemonSearchBar />
          <Row>
            <Col>
              <PokemonNavigation />
            </Col>  
            <Col className='d-flex flex-column justify-content-center'>
              <PokemonCard />
            </Col>
            <Col className='d-flex flex-column align-items-center'>
              <PokemonCapturedList />
            </Col>
          </Row>
        </Container>
      </PokemonProvider>
  )
}

export default App;
