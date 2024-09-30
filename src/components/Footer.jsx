import { Container, Col, Stack, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
            <Container className='bg-info text-center text-lg-start  fixed-bottom'>
                <Row>
                    <Col className='mx-5'>
                        <Stack>
                            <p>Numero de contacte: No me lo sé</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;