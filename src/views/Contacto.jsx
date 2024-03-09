import Container from 'react-bootstrap/Container'
import Formulario from '../components/Formulario'
import Waves from '../components/Waves'

const Contacto = () => {
  return (
    <Container className='text-center contenedor position-absolute align-items-center pt-5' fluid>
      <Waves />
      <h2 className='mt-4'>Cuéntanos ¿En qué te podemos ayudar?</h2>
      <Formulario />
    </Container>

  )
}
export default Contacto
