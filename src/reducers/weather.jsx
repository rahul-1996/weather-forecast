import { FETCH_WEATHER } from '../actions/index' ;

export default function( state=[], action){
    switch(action.type) {
        case FETCH_WEATHER:
            return state.concat([action.payload.data]) ; //Array because many possible cities.
            //We use concat and not push because we want to return a new piece of state everytime.
            //Do not mutate current state.  
        default:
            return state;
    }
}