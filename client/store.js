import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

//default data
import mock from './data/mock';


//create an object for default data
const defaultState = {
  mock
}

const store = createStore(rootReducer, defaultState, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
