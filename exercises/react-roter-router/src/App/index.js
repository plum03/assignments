import React from "react";
import { Switch, Route } from "react-router-dom";


export default function App(props) {
    return (
        <div>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
            </Switch>
            
            <Footer />
        </div>
    )
}