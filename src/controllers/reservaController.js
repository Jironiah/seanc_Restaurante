const API_URL = 'https://app.nocodb.com/api/v2/tables/mmlfg5txuriw4d0/records';
const TOKEN = "WkuovR4d2eb28XbemY9xvcXDrk8KsiGAeriC-tUp";


// Obtenir totes les tasques
export const getTasks = () => {
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
            console.error('Error obtenint tasques', error);
            throw error;
        });
};

// Afegir una nova tasca
export const creaContacte = async (reserva) => {
    const options = {
        method: 'POST',
        headers: {
            'xc-token': TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reserva),
    }
    try {
        const response = await fetch(API_URL, options);
        return await response.json();
    } catch (error) {
        console.error('Error añadiendo la reserva', error);
        throw error;
    }
};