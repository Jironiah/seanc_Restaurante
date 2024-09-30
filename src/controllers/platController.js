const API_URL = 'https://app.nocodb.com/api/v2/tables/m74gdckmlefab9j/records';
const TOKEN = "WkuovR4d2eb28XbemY9xvcXDrk8KsiGAeriC-tUp";


// Obtenir totes les tasques
export const getPlats = () => {
    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    }

    return fetch(API_URL, options)
        .then((response) => response.json())
        .then(r => r.list)
        .catch((error) => {
            console.error('Error obtenint plats', error);
            throw error;
        });
};

export const getEntrantsMenu = () => {
    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    };

    return fetch(API_URL, options)
        .then((response) => response.json())
        .then((data) => {
            const plats = data.list;
            const filteredPlats = plats.filter(plat => plat.menu === true && plat.tipus === "entrant");
            return filteredPlats;
        })
        .catch((error) => {
            console.error('Error obtenint plats', error);
            throw error;
        });
};

export const getPrincipalsMenu = () => {
    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    };

    return fetch(API_URL, options)
        .then((response) => response.json())
        .then((data) => {
            const plats = data.list;
            const filteredPlats = plats.filter(plat => plat.menu === true && plat.tipus === "principal");
            return filteredPlats;
        })
        .catch((error) => {
            console.error('Error obtenint plats', error);
            throw error;
        });
};

export const getPostresMenu = () => {
    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    };

    return fetch(API_URL, options)
        .then((response) => response.json())
        .then((data) => {
            const plats = data.list;
            const filteredPlats = plats.filter(plat => plat.menu === true && plat.tipus === "postre");
            return filteredPlats;
        })
        .catch((error) => {
            console.error('Error obtenint plats', error);
            throw error;
        });
};


// Afegir una nova tasca
export const addPlat = (task) => {
    const options = {
        method: 'POST',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }
    return fetch(API_URL, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error afegint tasca', error);
            throw error;
        });
};

// Obtenir una tasca per ID
export const getPlatbyId = (id) => {

    const options = {
        method: 'GET',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        }
    }

    return fetch(`${API_URL}/${id}`, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error obtenint la tasca', error);
            throw error;
        });
};

// Actualitzar una tasca
export const updatePlat = (id, task) => {

    const options = {
        method: 'PATCH',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...task, Id: id }),
    }

    return fetch(API_URL, options)
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error actualitzant tasca', error);
            throw error;
        });
};

// Esborrar una tasca
export const deletePlat = (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Id: id }),
    }
    return fetch(API_URL, options)
        .then(() => { })
        .catch((error) => {
            console.error('Error esborrant tasca', error);
            throw error;
        });
};

