import { createStore } from 'redux';
import reducer from '../reducer';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//Redux Dev Tools
);//创建仓库

export default store;