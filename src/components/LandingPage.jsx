import { Container, Row, Col } from "react-bootstrap";

function LandingPage() {

    const style = {
        color: "black"
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ubicación</h5>
                        <p className="card-text">Encuentra nuestra oficina en el siguiente mapa:</p>
                        <div className="row">
                            <div className="col-md-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.819817691522!2d2.4590993757379636!3d41.659634879064505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb33549ffa4927%3A0x92ddfae9e6efcac4!2sCarrer%20dels%20Matagalls%2C%2042%2C%2008471%20La%20Baronia%20del%20Montseny%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1727791325124!5m2!1ses!2ses"
                                    className="w-100"
                                    height="300"
                                    style={{ border: '0' }}
                                    loading="lazy"
                                    title="Mapa de ubicación"
                                ></iframe>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <h6>Datos de contacto</h6>
                                    <p>
                                        <strong>Teléfono:</strong> 628114523
                                        <br />
                                        <strong>Email:</strong> scocantequera@gmail.com
                                        <br />
                                        <strong>Horarios:</strong> 15:30 - 20:30
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default LandingPage;