import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

const firebaseConfig = {
  apiKey: "AIzaSyCpIRf2RKgEekQGB3VtK92EeukZpBNLNaA",
  authDomain: "modsen-map.firebaseapp.com",
  projectId: "modsen-map",
  storageBucket: "modsen-map.appspot.com",
  messagingSenderId: "580771019935",
  appId: "1:580771019935:web:cbbcb96e3b8941652236aa",
  measurementId: "G-9Q9M4VZ86C",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
