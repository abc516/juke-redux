import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers/root-reducer'
import {createLogger} from 'redux-logger'


let logger = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...logger)))

export default store


//
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
