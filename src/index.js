import React from 'react'
import ReactDOM from "react-dom/client"
import './styles/index.css'
import Routage from './components/Router'
import Footer from './components/Footer'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Routage/>
        <Footer/>
    </React.StrictMode>
)