import { useState } from 'react';
import { Form, Button, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { creaContacte } from '../controllers/reservaController';

const Reserva = () => {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [comentari, setComentari] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        creaContacte({ nom, email, telefon, data, hora, comentari })
            .then((res) => console.log(res))
            .catch((error) => console.error("error al crear contacto", error))
    }

    return (
        <>
            <Card>
                <Card.Header as="h5">Concertar Reserva</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" value={nom} onChange={(e) => setNom(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefon">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="telephone" placeholder="628114523" value={telefon} onChange={(e) => setTelefon(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="data">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="data" placeholder="YYYY/MM/DD" value={data} onChange={(e) => setData(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="hora">
                            <Form.Label>Hora de la reserva</Form.Label>
                            <Form.Control type="time" placeholder="HH/MM" value={hora} onChange={(e) => setHora(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comentari</Form.Label>
                            <Form.Control as="textarea" rows={3} value={comentari} onChange={(e) => setComentari(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Enviar Reserva
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default Reserva;