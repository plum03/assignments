import React, { Component } from "react";
import Header from "./Header";
import Content from './Content';


function App(props) {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Content></Content>
        </div>
        
    )
}

export default App;