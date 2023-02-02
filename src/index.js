import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAR_uXAPDCrX444c929PXwbFfy5_MVoppY",
  authDomain: "mint-button.firebaseapp.com",
  projectId: "mint-button",
  storageBucket: "mint-button.appspot.com",
  messagingSenderId: "135964633246",
  appId: "1:135964633246:web:aa9fbeccbd7d20ffc1338f",
  measurementId: "G-5WYNT0Z2T6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
