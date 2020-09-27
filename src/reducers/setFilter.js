import { SET_FILTER, ADD_TODO } from "../actions/actionTypes";

export default function setFilterReducer(state = "", action) {
  switch (action.type) {
    case `${SET_FILTER}_FULFILLED`:
      return action.payload.data.filter;

    case `${ADD_TODO}_FULFILLED`:
      if (state === "COMPLETED") {
        return "ALL";
      }
      return state;
    default:
      return state;
  }
}
