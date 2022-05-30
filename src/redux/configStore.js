// createStore 로 store 만들어 줄거야
import { createStore } from "redux";
// store 안에 rootReducer 만들거야
import rootReducer from './modules';

const store = createStore(rootReducer);
export default store;