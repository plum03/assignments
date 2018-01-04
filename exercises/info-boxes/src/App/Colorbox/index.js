import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

function Colorbox(props) {
    let  boxes = [{
        title: "Cherry", 
        subtitle: "fruit",
        info: "crisp and delicious",
        color: "#a00c31",
        textColor: "white"
    },
    {
        title: "Strawberry",
        subtitle: "fruit",
        info: "Mushy bananas make me gag",
        color: "#f92c4f",
        textColor: "white"
    },
    {
        title: "Green Apple",
        subtitle: "fruit",
        info: "Mushy bananas make me gag",
        color: "#32d112"
    },
    {
        title: "Blue Raspberry",
        subtitle: "fruit",
        info: "Mushy bananas make me gag",
        color: "#0fafff"
    },
    {
        title: "Blueberry",
        subtitle: "fruit",
        info: "superfood",
        color: "#0d62ad",
        textColor: "white"        
    },
    {
        title: "Banana",
        subtitle: "fruit",
        info: "Mushy bananas make me gag",
        color: "gold"
    },
    {
        title: "Tomato",
        subtitle: "fruit",
        info: "Mushy bananas make me gag",
        color: "#f7180c"
    },
    {
        title: "Cucumber",
        subtitle: "I think it's a fruit",
        info: "crisp and cool",
        color: "#f1f9d9"
    },
    {
        title: "Orange",
        subtitle: "fruit",
        info: "juicy and sweet",
        color: "#ff6a07",
        textColor: "white"                
    }];


    return (
        <div className="box-wrapper" >
            {boxes.map((box) => {
                return (
                    <div className="box" style={{backgroundColor: `${box.color}`, color: `${box.textColor}`}}>
                        <h1>{box.title}</h1>
                        <h2>{box.subtitle}</h2>
                        <p>{box.info}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Colorbox;

// ********* ASK BEN *************

// Colorbox.propTypes = {
//     data: PropTypes.array
// }

// Colorbox.defaultProps = {
// }
// *********** END **************
