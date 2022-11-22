// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

const automobili = [
    {
        "marca" : 'Tesla',
        "modello" : 'Model X',
        "alimentazione" : 'Elettrica'
    },
    {
        "marca" : 'Seat',
        "modello" : 'Leon Cupra 2021',
        "alimentazione" : 'Elettrica'
    },
    {
        "marca" : 'Ford',
        "modello" : 'Puma ST',
        "alimentazione" : 'Elettrica'
    },
    {
        "marca" : 'Skoda',
        "modello" : 'Fabia 1.0',
        "alimentazione" : 'Benzina'
    },
    {
        "marca" : 'Audi',
        "modello" : 'TT coupè',
        "alimentazione" : 'Benzina'
    },
    {
        "marca" : 'Volkswagen',
        "modello" : ' T-Roc R',
        "alimentazione" : 'Benzina'
    },
    {
        "marca" : 'Toyota ',
        "modello" : 'Yaris GR',
        "alimentazione" : 'gpl'
    },
    {
        "marca" : 'Nissan',
        "modello" : '370Z',
        "alimentazione" : 'Diesel'
    },
    {
        "marca" : 'Suzuki',
        "modello" : 'Swift Sport',
        "alimentazione" : 'Diesel'
    },
    {
        "marca" : 'Subaru ',
        "modello" : 'BRZ',
        "alimentazione" : 'Diesel'
    },

];


// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const result = automobili.filter (
     auto => {
        
        if(auto.alimentazione === 'Benzina') {
            document.getElementById('benzina').innerHTML += `<div>${auto.marca} e il modello ${auto.modello}</div>`
        } else if (auto.alimentazione === 'Diesel') {
            document.getElementById('diesel').innerHTML += `<div>${auto.marca} e il modello ${auto.modello}</div>`
        } else {
            document.getElementById('resto').innerHTML += `<div>${auto.marca} e il modello ${auto.modello}</div>`
        }

    }

)