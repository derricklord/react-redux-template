import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import mock from './mock';

const rootReducer = combineReducers({mock, routing:routerReducer});

export default rootReducer;
