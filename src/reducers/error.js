import {
  TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from "../actions/actionTypes";

export default function errorReducer(state = {}, action) {
  switch (action.type) {
    //REJECTED
    case `${TODOS}_REJECTED`:
    case `${ADD_TODO}_REJECTED`:
    case `${REMOVE_TODO}_REJECTED`:
    case `${TOGGLE_TODO}_REJECTED`:
    case `${SET_FILTER}_REJECTED`:
    case "INITIAL_FILTER_REJECTED":
      return {
        hasError: true,
        errorMessage: action.payload.message,
      };

    //END_REJECTED
    default:
      return state;
  }
}
