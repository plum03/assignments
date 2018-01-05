import React, {Component} from "react";

import Pet from "./Pet";

function Friend(props) {

    // Display owner info
    return (
        <div className="friend-wrapper">
            <div className="friend">
                <h2>Name: {props.name}</h2>
                <h3>Age: {props.age}</h3>
            </div>

            <div className="pet">
                {props.pets.map((pet) => {
                    return <Pet {...pet}></Pet>
                })}
                
            </div>
        </div>
    )

}

export default Friend;