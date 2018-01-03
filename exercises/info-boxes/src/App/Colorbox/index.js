import React, { Component } from "react";

function Colorbox(props) {
    return (
        <div style={props.boxStyle}>
            {props.boxes.map((box) => {
                return (
                    <div>
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