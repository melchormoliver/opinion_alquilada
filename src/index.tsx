import React, { Suspense } from 'react';
import firebase from 'firebase/app';
import ReactDOM from 'react-dom';
import './i18n';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { rootReducer } from './store/root-reducer';

const firebaseConfig = {
  apiKey: 'AIzaSyDTBOqaVUWAXvBlMxGEGC85QqZe3-2z21A',
  authDomain: 'opinion-alquilada.firebaseapp.com',
  projectId: 'opinion-alquilada',
  storageBucket: 'opinion-alquilada.appspot.com',
  messagingSenderId: '613508434580',
  appId: '1:613508434580:web:4badde1b5eeb6132304281',
  measurementId: 'G-LQJ8VGZ060',
};
firebase.initializeApp(firebaseConfig);

const store = createStore(rootReducer);

ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
