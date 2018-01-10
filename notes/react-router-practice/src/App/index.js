import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Navbar from "./Navbar";

function App(props) {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
        </div>
    )
}

export default App;


// import React, { Component } from 'react';
// import { Switch, Route } from "react-router-dom";

// import Home from '../pages/Home';
// import About from '../pages/About';
// import Services from '../pages/Services';
// import Service from '../pages/Service';

// import Navbar from './Navbar';

// export default function App(props) {
//     return (
//         <div>
//             <Navbar />
//             <Switch>
//                 {/* exact path on Home and services to avoid bad redirect */}
//                 <Route exact path="/" component = {Home}/>
//                 <Route path="/about" component={About}/>
//                 <Route exact path="/services" component={Services}/>
//                 <Route path="/services/:index" component={Service}/>
//                 {/* index in the route statement can be any word of your choosing */}
//             </Switch>
//         </div>
        
//     )
// }