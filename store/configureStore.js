import {createWrapper} from 'next-redux-wrapper';
import {createStore, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const configureStore = () =>{
    const middleware = [];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware));

    const store = createStore(reducers,enhancer);
    return store;
}

const wrapper = createWrapper(configureStore, {
    debug:process.env.NODE_ENV === 'development',
});

export default wrapper;
