import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import products from "./reducers/index";
import "@mui/material";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Create the Redux store using the "products" reducer
const store = createStore(products);

// Create a root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped with the Redux Provider component
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
