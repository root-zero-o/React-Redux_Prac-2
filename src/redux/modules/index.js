// 그래서 rootReducer 안에 뭐가있는데?
// rootReducer 안에서 리듀서들을 합쳐줄거야. combineReducer를 사용해서!
import { combineReducers } from "redux";
import player from './player';

// 이렇게 합쳐주었다
const rootReducer = combineReducers({
    player
})

export default rootReducer;