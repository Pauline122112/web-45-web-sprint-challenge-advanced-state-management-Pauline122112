//TASK THREE

import {
	ADD_SMURF,
	ERROR_MESSAGE,
	FETCH_FAIL,
	FETCH_START,
	FETCH_SUCCESS,
} from "../actions";

//Added state values into initital state
export const initialState = {
	smurfs: [],
	isLoading: false,
	errorMessage: "",
};
//Standard reducer function
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				smurfs: action.payload,
			};

		case FETCH_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case ADD_SMURF:
			return {
				...state,
				smurfs: [...state.smurfs, action.payload],
			};

		case ERROR_MESSAGE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
