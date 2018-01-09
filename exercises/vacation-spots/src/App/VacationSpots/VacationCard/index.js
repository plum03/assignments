import React, {Component} from "react";

function VacationCard (props) {
    return (
        <div>
            <h1>Location: {props.place}</h1>
            <h3>Price: {props.price}</h3>
            <p>Best Time to Travel: {props.timeToGo}</p>
        </div>
    )
}

export default VacationCard;