
import {config} from '../config';

function getPlaces() {
   return fetch(config.LOCAL_HOST +'/places')
   .then(function(response){
        return response.json();
    }).catch(function(error) {
       return error;
    })
}

function getPlace(slug) {
   return fetch(config.LOCAL_HOST +'/places/'+slug)
   .then(function(doc){
        return doc.json();
    })
   .catch(console.log);
}

function createPlace(data,jwt){
    let formData = new FormData();

    for(let field in data){
        formData.append(field,data[field])
    }

    return fetch(config.LOCAL_HOST+'/places',{
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer '+jwt
        }
    }).then(dataRemote => {
        return dataRemote.json();
    })
}


export {getPlaces,getPlace, createPlace};
export default {
    places: [
        {
          imageUrl: '/images/place-1.jpg',
          address: 'Av. Las Flores #542',
            title: 'El Retablo',
            description: 'Ver y encuentra los mejores pollos a la brasa y comida en general.'
        },
        {
            imageUrl: '/images/place-2.jpg',
            address: 'Av. Las Flores #542',
            title: 'Pampas de Quinua',
            description: 'Disfruta de los mejores lugares de Ayacucho. Un área de aproximadamente tres kilómetros de extensión donde se libró la definitiva Batalla de Ayacucho.'
        },
        {
            imageUrl: '/images/place-3.jpg',
            address: 'Av. Las Flores #542',
            title: 'Huacaraylla: El lago turquesa',
            description: 'Las aguas de esta majestuosa obra de arte de la naturaleza, en cierta época del año se pinta de color verde y en otra de turquesa, pero su transparencia es todo el año.'
        }
    ]
}