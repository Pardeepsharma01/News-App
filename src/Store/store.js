import{applyMiddleware , createStore } from "redux";
import thunk from "redux-thunk";
 import reducer from "./reducer"

 const shop = createStore(reducer,{}, applyMiddleware(thunk))


export default shop 