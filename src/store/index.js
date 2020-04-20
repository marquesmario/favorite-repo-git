import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';


const store = process.env.NODE_ENV === 'development'? createStore(reducers, compose(applyMiddleware(...[]), console.tron.createEnhancer())): createStore(reducers);

export default store;