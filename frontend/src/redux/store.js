import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import searchReducer from "./reducers/searchReducer"

const reducer = combineReducers({
   search: searchReducer
  })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store