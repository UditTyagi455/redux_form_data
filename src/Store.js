import MyReducer from "./Reducer/reducer";
import {createStore} from "redux";
import mainReducer from "./Reducer";

const store = createStore(mainReducer);

export default store;