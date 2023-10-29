import React, { useRef } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const SearchBar = () => {
  const { handlePokemonSearch } = usePokemonContext();
  const inputRef = useRef(null);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    handlePokemonSearch(inputRef.current.value || '');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <Row className='mb-3 w-100 mx-auto'>
      <Form
        className='d-flex justify-content-center' 
        onSubmit={handleSearchButtonClick}>
        <Form.Group className='mx-2'>
          <Form.Label
            hidden 
            htmlFor='pokemon-input'> Search Pokemon </Form.Label>
          <Form.Control
            id='pokemon-input' 
            type='text'
            placeholder='Pokemon Name or ID'
            aria-label='Pokemon Name or ID'
            ref={inputRef}
            required
          
          />      
        </Form.Group>
          <Button variant='outline-light' type='submit'>
            Search
          </Button>
      </Form>
    </Row>
  )
}

export default SearchBar;
