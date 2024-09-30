import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPlats, getEntrantsMenu, getPrincipalsMenu, getPostresMenu } from '../controllers/platController';

const Plat = (props) => {
    const [plats, setPlats] = useState([]);
    const [menuEntrants, setMenuEntrants] = useState([]);
    const [menuPrincipals, setMenuPrincipals] = useState([]);
    const [menuPostres, setMenuPostres] = useState([]);

    useEffect(() => {
        getPlats()
            .then((data) => setPlats(data))
            .catch((error) => console.error('Error carregant plats', error));

        getEntrantsMenu()
            .then((data) => setMenuEntrants(data))
            .catch((error) => console.error('Error carregant plats', error));

        getPrincipalsMenu()
            .then((data) => setMenuPrincipals(data))
            .catch((error) => console.error('Error carregant plats', error));

        getPostresMenu()
            .then((data) => setMenuPostres(data))
            .catch((error) => console.error('Error carregant plats', error));

    }, []);

    const tipusFilter =
        plats.filter(item => item.tipus == props.tipus).map(plat => (
            <tr key={plat.Id}>
                <td>{plat.nom}</td>
                <td>{plat.preu}</td>
                <td><img src={plat.foto} width={"30px"} height={"30px"} alt={`Imagen plato ${plat.nom}`} /></td>
                <td><Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form></td>
                <td>{plat.tipus}</td>
                <td><Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.vegetaria} />
                </Form>
                </td>
            </tr>
        ));

    const menuFilterEntrants = menuEntrants.map(plat => (
        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td><img src={plat.foto} width={"30px"} height={"30px"} alt={`Imagen plato ${plat.nom}`} /></td>
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td>
            <td>{plat.tipus}</td>
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

    const menuFilterPrincipals = menuPrincipals.map(plat => (
        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td><img src={plat.foto} width={"30px"} height={"30px"} alt={`Imagen plato ${plat.nom}`} /></td>
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td>
            <td>{plat.tipus}</td>
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

    const menuFilterPostres = menuPostres.map(plat => (
        <tr key={plat.Id}>
            <td>{plat.nom}</td>
            <td>{plat.preu}</td>
            <td><img src={plat.foto} width={"30px"} height={"30px"} alt={`Imagen plato ${plat.nom}`} /></td>
            <td>
                <Form>
                    <Form.Check
                        type={'checkbox'}
                        id={plat.Id}
                        defaultChecked={plat.menu} />
                </Form>
            </td>
            <td>{plat.tipus}</td>
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
                        <th>Menu</th>
                        <th>Tipus</th>
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
