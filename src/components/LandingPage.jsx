import { Container, Row, Col } from "react-bootstrap";

function LandingPage() {

    const style = {
        color: "black"
    }

    return (
        <>
            <Container>
                <Row className='bg-primar text-white p-4'>
                    <Col style={style} className='mx-5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.819817691522!2d2.4590993757379636!3d41.659634879064505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb33549ffa4927%3A0x92ddfae9e6efcac4!2sCarrer%20dels%20Matagalls%2C%2042%2C%2008471%20La%20Baronia%20del%20Montseny%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1727791325124!5m2!1ses!2ses" className='h-100 w-100'
                            style={{ border: '0' }}
                            loading='lazy'></iframe>
                    </Col>
                    <Col style={style} className='mx-5'>
                        <p>
                            Datos de contacto
                            <br />
                            Telefono: 628114523
                            <br />
                            Email: scocantequera@gmail.com
                            <br />
                            Horarios: 15:30 - 20:30
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default LandingPage;