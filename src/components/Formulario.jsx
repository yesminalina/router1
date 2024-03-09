import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import '../assets/css/formulario.css'

const Formulario = () => {
  return (
    <Container className='w-50 mt-4'>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Correo:</Form.Label>
          <Form.Control type='email' placeholder='tuemail@ejemplo.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Descripción:</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button className='btn' size='lg' type='submit'>
          Enviar
        </Button>
      </Form>
    </Container>
  )
}
export default Formulario
