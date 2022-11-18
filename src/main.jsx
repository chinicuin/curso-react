import React from "react";
import ReactDOM from "react-dom/client";

//import { FirstApp } from "./FirstApp";
//import { App } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp title="hole munde" subtitle={ 123 } /> */}
        <CounterApp value={ 5 }></CounterApp>
    </React.StrictMode>
);