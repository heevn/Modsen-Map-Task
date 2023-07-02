import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { createContext } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCpIRf2RKgEekQGB3VtK92EeukZpBNLNaA",
  authDomain: "modsen-map.firebaseapp.com",
  projectId: "modsen-map",
  storageBucket: "modsen-map.appspot.com",
  messagingSenderId: "580771019935",
  appId: "1:580771019935:web:cbbcb96e3b8941652236aa",
  measurementId: "G-9Q9M4VZ86C"
};

export const Context = createContext(null);

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getStorage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
        app,
        auth,
        firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
