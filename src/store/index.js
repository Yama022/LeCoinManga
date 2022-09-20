import { createStore } from 'redux';
import reducer from 'src/reducer';

const store = createStore(reducer);

export default store;
