import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/404/Error'
import Apartment from '../pages/appartment/Apartment'
import Banner from './Banner'


function Routage(){
 return  <Router>
        <Banner/>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Apartment/*" element={<Apartment />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
}
export default Routage