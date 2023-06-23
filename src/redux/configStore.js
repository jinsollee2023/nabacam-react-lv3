import { createStore } from "redux";
import { combineReducers } from "redux";
import modalReducer from "./modules/modalReducer";
import inputReducer from "./modules/inputReducer";
import selectReducer from "./modules/selectReducer";

const rootReducer = combineReducers({
  modalReducer,
  inputReducer,
  selectReducer,
});
const store = createStore(rootReducer);

export default store;
