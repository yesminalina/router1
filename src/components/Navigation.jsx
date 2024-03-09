import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../assets/css/navigation.css'

const Navigation = () => {
  return (
    <Navbar className='navbar' data-bs-theme='dark' expand='md'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link>
            <img className='icon-menu ms-3' src='images/home_icon.svg' />
            <Link className='text-light ms-1 link' to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <img className='icon-menu ms-3' src='images/message_icon.svg' />
            <Link className='text-light ms-1 link' to='/contacto'>Contacto</Link>
          </Nav.Link>
        </Nav>
        <Navbar.Brand>
          Happy Cake
          <img
            alt=''
            src='images/cup_cake_icon.svg'
            width='40'
            height='40'
            className='d-inline-block align-bottom'
          />{' '}
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default Navigation
