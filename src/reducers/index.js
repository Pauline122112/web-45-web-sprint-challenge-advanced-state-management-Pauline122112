//TASK THREE

import { ADD_SMURF, ERROR_MESSAGE, FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from "../actions";

//Added state values into initital state
export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''

}
//Standard reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_START:
            return {
                ...state, 
                isLoading: true
            }
        
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
                
             }
             
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
//========COME BACK TO THIS===========================
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }
//========COME BACK TO THIS===========================
        case ERROR_MESSAGE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
            default:
                return state

        }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;



//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.