import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/home';
import Header from "./components/header/header";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Home/>
    </React.StrictMode>,
    document.getElementById('root')
);
