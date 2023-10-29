import { Button } from 'react-bootstrap';

const NavButton = ({
  children,
  onClick
}) => {
  return (
    <Button variant='outline-light' onClick={onClick}>{children}</Button> 
  )
}

export default NavButton;
