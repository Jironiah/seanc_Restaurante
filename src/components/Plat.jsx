import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { getPlats } from '../controllers/platController';

const Plat = (props) => {
    const [plats, setPlats] = useState([]);

    useEffect(() => {
        getPlats()
            .then((data) => {
                setPlats(data);
            })
            .catch((error) => {
                console.error('Error carregant plats', error);
                setPlats([]);
            });


    }, []);

    const tipusFilter =
        plats.filter(item => item.tipus == props.tipus).map(plat => (
            <tr key={plat.Id}>
                <td>{plat.nom}</td>
                <td>{plat.preu}</td>
                <td>
                    <img src={plat.foto} width={"55px"} height={"55px"} alt={`Imagen plato ${plat.nom}`} />
                </td>
                {/* <td>
                    <Form>
                        <Form.Check
                            type={'checkbox'}
                            id={plat.Id}
                            defaultChecked={plat.menu} />
                    </Form>
                </td> */}
                {/* <td>{plat.tipus}</td> */}
                <td>
                    <Form>
                        <Form.Check
                            type={'checkbox'}
                            id={plat.Id}
                            defaultChecked={plat.vegetaria} />
                    </Form>
                </td>
            </tr>
        ))

    const menuFilterEntrants = plats.filter(plat => plat.tipus == "entrant").filter(e => e.menu == true).map(plat => (
        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td>
                <img src={plat.foto} width={"55px"} height={"55px"} alt={`Imagen plato ${plat.nom}`} />
            </td>
            {/* <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td> */}
            {/* <td>{plat.tipus}</td> */}
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.vegetaria} />
                </Form>
            </td>
        </tr>
    ));

    const menuFilterPrincipals = plats.filter(plat => plat.tipus == "principal").filter(e => e.menu == true).map(plat => (

        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td>
                <img src={plat.foto} width={"55px"} height={"55px"} alt={`Imagen plato ${plat.nom}`} />
            </td>
            {/* <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td> */}
            {/* <td>{plat.tipus}</td> */}
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.vegetaria} />
                </Form>
            </td>
        </tr>
    ));

    const menuFilterPostres = plats.filter(plat => plat.tipus == "postre").filter(e => e.menu == true).map(plat => (
        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td>
                <img src={plat.foto} width={"55px"} height={"55px"} alt={`Imagen plato ${plat.nom}`} />
            </td>
            {/* <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td> */}
            {/* <td>{plat.tipus}</td> */}
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.vegetaria} />
                </Form>
            </td>
        </tr>
    ));

    function mostrarTipus(tipus, menu) {
        if (tipus == "entrant" || tipus == "principal" || tipus == "postre" || menu == "false") {
            return (
                tipusFilter
            )
        }
    }

    function mostrarMenuEntrant(menu) {
        <h1>Entrants</h1>
        if (menu == "true") {
            return (
                menuFilterEntrants
            )
        }
    }

    function mostrarMenuPrincipal(menu) {
        if (menu == "true") {
            return (
                menuFilterPrincipals
            )
        }
    }

    function mostrarMenuPostre(menu) {
        if (menu == "true") {
            return (
                menuFilterPostres
            )
        }
    }

    return (
        <div>
            <h1>Plats</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Preu</th>
                        <th>Foto</th>
                        {/* <th>Menu</th> */}
                        {/* <th>Tipus</th> */}
                        <th>Vegetaria</th>
                    </tr>
                </thead>
                <tbody>
                    {mostrarTipus(props.tipus, props.menu)}
                    {mostrarMenuEntrant(props.menu)}
                    {mostrarMenuPrincipal(props.menu)}
                    {mostrarMenuPostre(props.menu)}
                </tbody>
            </Table>
        </div>
    );
};

export default Plat;
