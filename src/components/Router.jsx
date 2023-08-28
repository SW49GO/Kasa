import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/404/Error'
import Appartment from '../pages/appartment/Appartment'
import Banner from './Banner'


function Routage(){
 return  <Router>
        <Banner/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Appartment/*" element={<Appartment />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
}
export default Routage