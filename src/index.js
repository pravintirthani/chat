import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Routes from './Routes.jsx';
import thunk from 'redux-thunk';
import { createStore, combineReducers,applyMiddleware } from 'redux'
import Reducer from './components/Reducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
const store = createStore(
    combineReducers({
        Reducer,
      routing: routerReducer
    })
  )

ReactDOM.render( <Routes  store={store}/>, document.getElementById('root'));
registerServiceWorker();
