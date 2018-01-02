import * as requests from '../requests/visits';

export function addVisitSuccess(visit){
   return { type: 'ADD_VISIT', visit };
}

export function getVisit(visits){
   return { type: 'GET_VISIT', visits };
}
export function getAllPlace(slug){
   return (dispatch, getState) => {      
      requests.getAllForPlace(slug).then(result =>{
         dispatch(getVisit(result))
      });

   }
}

export function addVisit(place, observation, reaction){
   return (dispatch, getState) => {
      let user = getState().user;
      if(!user) return null;

      requests.add(user.jwt, place, observation, reaction).then(result =>{
         dispatch(addVisitSuccess(result))
      });

   }
}