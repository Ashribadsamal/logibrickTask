import { createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { colorReducer } from './Reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(colorReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;
