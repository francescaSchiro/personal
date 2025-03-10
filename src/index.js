import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// This is the ID of the div in your index.html file
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
