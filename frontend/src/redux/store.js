import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import propertyReducer from "./reducers/propertyReducer";
import searchReducer from "./reducers/searchReducer";

const reducer = combineReducers({
  login: loginReducer,
  property: propertyReducer,
  search: searchReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
