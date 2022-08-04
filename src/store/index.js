import { createStore, applyMiddleware } from 'redux';

const enhancers = composeEnhancers(
  applyMiddleware(),);

  const store = createStore(reducer, enhancers);

  export default store;
