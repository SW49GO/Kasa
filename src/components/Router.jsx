import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Error from '../pages/404/Error'
import Apartment from '../pages/apartment/Apartment'
import Banner from './Banner'

/**
 * Function to manage application routing
 * @returns Component function Routage
 */
function Routage(){
    // Using the  BrowserRouter as Router component to manage application routes
    return  <Router>
            <Banner/>
                <Routes>
                    {/*Use the exact attribute to be sure to limit the url to the path "/"*/}
                    <Route path="/" exact element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Apartment/*" element={<Apartment />} />
                    {/*All the other url route */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
}
export default Routage