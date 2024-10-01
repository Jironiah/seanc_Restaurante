import { Container, Col, Stack, Row, Image } from 'react-bootstrap';

function Footer() {

    const estilo = {
        backgroundColor: "lightBlue"
    }
        
    return (
        <footer>
            <Container style={estilo} fluid >
                <Row className='bg-primar text-white p-4'>
                    <Col className='mx-5'>
                        <Stack>
                            <Image src="https://i.pinimg.com/originals/4e/24/f5/4e24f523182e09376bfe8424d556610a.png" alt="company logo" rounded width={50} height={50} />
                            <p>Numero de contacte: No me lo sé</p>
                        </Stack>
                    </Col>
                    <Col className='mx-5'>
                        <p>Carrer Matagalls 9, Baronia - Can Bosch 08471</p>
                        <p>Más información</p>
                        <p>No sé que más poner</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;