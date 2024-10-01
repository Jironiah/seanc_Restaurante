import { Container, Col, Stack, Row, Image } from 'react-bootstrap';

function Footer() {

    const estiloFooter = {
        backgroundColor: "lightBlue",
        position: "absolute",
        left: "0"
    }

    return (
        <Container style={estiloFooter} fluid >
            <footer className="page-footer font-small blue pt-4">
                <Row className='bg-primar text-white p-4'>
                    <Col className='mx-5'>
                        <Image src="https://i.pinimg.com/originals/4e/24/f5/4e24f523182e09376bfe8424d556610a.png" alt="company logo" rounded width={50} height={50} />
                        <p>Numero de contacte: No me lo sé</p>
                    </Col>
                    <Col className='mx-5'>
                        <p>Carrer Matagalls 9, Baronia - Can Bosch 08471</p>
                        <p>Más información</p>
                        <p>No sé que más poner</p>
                    </Col>
                </Row>
            </footer>
        </Container>
    );
};

export default Footer;