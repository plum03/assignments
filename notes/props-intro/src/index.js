import React from "react";
import ReactDOM from "react-dom";

import App from './App';

// Provide props for App here:
ReactDOM.render(
    <App 
        location="the Party" 
        desc="It's the hottest spot in town" 
        item="beer" />, 
        document.getElementById("root"));