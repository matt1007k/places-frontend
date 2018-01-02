
import { config } from '../config';
function login(user) {
   return fetch(config.LOCAL_HOST +'/sessions',{
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
   .then(function(response){
        return response.json();
    }).catch(function(error) {
       return error;
    })
}

function signUp(user) {
   return fetch(config.LOCAL_HOST +'/users',{
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      }
    })
   .then(function(response){
        return response.json();
    })
}
export {login,signUp};