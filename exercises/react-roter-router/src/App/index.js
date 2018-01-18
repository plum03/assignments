import React from "react";
import { Switch, Route } from "react-router-dom";


import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'


export default function App(props) {

    let appStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh"
    }
    

    return (
        <div className="app-wrapper" style={appStyles}>
            <Navbar />

            <Switch className="main-content">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
            
            <Footer />
        </div>
    )
}