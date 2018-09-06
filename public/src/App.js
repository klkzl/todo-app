import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ToDoAppContainer from './containers/ToDoAppContainter';
import rootReducer from './reducers';

import 'normalize.css';
import './styles/styles.scss';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <ToDoAppContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));