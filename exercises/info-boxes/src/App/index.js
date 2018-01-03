import React, { Component } from "react";
import Colorbox from './Colorbox';

function App(props) {

    let boxes = [{
        info: "crisp and delicious",
        title: "Apple", 
        subtitle: "fruit"
    },
    {
        title: "Banana",
        subtitle: "fruit",
        info: "Mushy bananas make me gag"
    },
    {
        title: "Orange",
        subtitle: "fruit",
        info: "juicy and sweet"
    }];

    return (
        <div>
            <Colorbox>
                boxStyle = {{backgroundColor: "lightslateblue", height: "200px"}}
                
            </Colorbox>
        </div>
    )
}

export default App;