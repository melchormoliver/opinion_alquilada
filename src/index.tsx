import firebase from 'firebase/app';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';

import App from './App';
import * as serviceWorker from './serviceWorker';

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
ReactDOM.render(
  <Suspense fallback={<div>Loading... </div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
