import axios from 'axios';
//TASK TWO
//1- Added a thunk action called fetchSmurfs that triggers a loading status and performs an axios call to retrieve smurfs from server, saves the result of that call to our state and shows an error if one is made.

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch(fetchStart())

         axios.get("http://localhost:3333/smurfs")
         .then(res=>{
             dispatch(fetchSuccess(res.data))
         })
         .catch(err => {
             dispatch(fetchFail(err))
         })
    }
}


export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
	return { type: FETCH_START };
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (smurfs) => {
	return { type: FETCH_SUCCESS, payload: smurfs};
};

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (error) => {
	return { type: FETCH_FAIL, payload: error };
};
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const ADD_SMURF = "ADD_SMURF"
export const addSmurf = (smurf) => {
    return { type: ADD_SMURF, payload: smurf}
}
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const errorMessage = (error) => {
    return { type: ERROR_MESSAGE, payload: error}
}





