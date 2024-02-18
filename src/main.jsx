import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import infoReducer from "./features/info.jsx"
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        info: infoReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
    </BrowserRouter>

)
