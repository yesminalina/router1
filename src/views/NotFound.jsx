import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'
import cake404 from '../assets/images/error404.jpeg'

const NotFound = () => {
  return (
    <Container className='mt-5'>
      <Row>
        <Col className='text-center'>
          <Figure>
            <Figure.Caption>
              <h4>Error 404: No hemos podido encontrar la página.</h4>
            </Figure.Caption>
            <Figure.Image
              width={342}
              height={360}
              alt='Error 404'
              src={cake404}
            />
          </Figure>
        </Col>
      </Row>
    </Container>
  )
}
export default NotFound
