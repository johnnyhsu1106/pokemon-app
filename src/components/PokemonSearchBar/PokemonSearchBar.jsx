import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import { usePokemonContext } from '../../context/PokemonContext';


const PokemonSearchBar = () => {
  const { handlePokemonSearch } = usePokemonContext();
  const [ query, SetQuery ] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    handlePokemonSearch(query);
    SetQuery('');
  };
  
  const handleSearchInputChange = (inputQuery) => {
    SetQuery(inputQuery);
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
            value={query}
            onChange={(e) => {handleSearchInputChange(e.target.value)}}
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

export default PokemonSearchBar;
