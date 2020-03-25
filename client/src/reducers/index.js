import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import userReducer from "./user.reducer";

// keys provided to object represent keys that exist inside state object
export default combineReducers({
  countries: countriesReducer,
  user: userReducer
});
