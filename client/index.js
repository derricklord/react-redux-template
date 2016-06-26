import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//import Components
import App from './containers/App';
import Single from  './components/Single';
import Index from './components/Index';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render((router), document.getElementById('root'));
