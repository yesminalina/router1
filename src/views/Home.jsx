import Container from 'react-bootstrap/Container'
import Waves from '../components/Waves'
import cake from '../assets/images/cake_dessert.svg'
import '../assets/css/home.css'

const Home = () => {
  return (
    <Container className='text-center contenedor position-absolute align-items-center pt-5' fluid>
      <Waves />
      <h2>Bienvenido a <span>Happy Cake</span></h2>
      <p>El lugar de los pasteles felices</p>
      <Container fluid className='img-cont'>
        <img className='cakeHome' src={cake} />
      </Container>
    </Container>

  )
}
export default Home
