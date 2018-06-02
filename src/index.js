import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHDZ4LfO_Y_yTPpbQjMbsEfWF6EY1mYgo",
    authDomain: "db2-proyecto2.firebaseapp.com",
    databaseURL: "https://db2-proyecto2.firebaseio.com",
    projectId: "db2-proyecto2",
    storageBucket: "db2-proyecto2.appspot.com",
    messagingSenderId: "990001298514"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
