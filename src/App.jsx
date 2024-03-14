import { Row, Col, Container } from 'react-bootstrap';
import { ViewportProvider } from './context/ViewportContext';
import { PokemonProvider } from './context/PokemonContext';
import PokemonSearchBar from './components/PokemonSearchBar/PokemonSearchBar';
import PokemonNavigation from './components/PokemonNavigation/PokemonNavigation';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonCapturedList from './components/PokemonCapturedList/PokemonCapturedList';
import { useViewportContext } from './context/ViewportContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const { isMobile } = useViewportContext();

  if (isMobile) {
    return (
      <Container className='d-flex flex-column justify-content-center my-3 vh-100'>
        <PokemonSearchBar />
        <PokemonCard />
        <PokemonCapturedList />
      </Container>
    )
  }

  return (
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
  )
}

export default App;
