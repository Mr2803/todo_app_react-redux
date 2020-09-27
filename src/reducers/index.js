import todos from "./todos";
import setFilter from "./setFilter";
import error from "./error";
import { combineReducers } from "redux";

export default combineReducers({
  todos,
  setFilter,
  error,
});
