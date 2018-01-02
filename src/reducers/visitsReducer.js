export default function visitsReducer(state = [], action){
   switch(action.type){
      case 'ADD_VISIT':
      console.log(action.visit);
         //combinar(concat) dos arreglos de la visita nueva(visit) y el visita que ya existe(state)
         return [action.visit].concat(state);
      case 'GET_VISIT':
         return action.visits;
      default:
         return state;
   }
}
