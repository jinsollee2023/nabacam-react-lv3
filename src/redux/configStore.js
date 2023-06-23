import { createStore } from "redux";
import { combineReducers } from "redux";
import modal1Reducer from "./modal1Reducer";

const rootReducer = combineReducers({ modal1Reducer });
const store = createStore(rootReducer);

export default store;
