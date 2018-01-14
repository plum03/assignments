import React from 'react'

import Navbar from './Navbar'
import Info from './Info'
import Services from './Services'
import Gallery from './Gallery'
import Footer from './Footer'

function App(props) {
    return (
        <div>
           <Navbar />
           <Info />
           <Services />
           <Gallery />
           <Footer /> 
        </div>
    )
}

export default App
