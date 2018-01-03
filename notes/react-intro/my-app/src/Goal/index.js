import React, { Component } from "react";


function Goal(props) {
    return (
        <div>
            <p>
           { goals[Math.floor(Math.random() * 7)] }
            </p>
        </div>
        

    );
}

export default Goal;

let goals = ["sleep", "keep breathing", "live it up!", "focus", "work harder", "eat a turd sandwich ... sometimes you've just got to do it", "party like it's 1999"];
