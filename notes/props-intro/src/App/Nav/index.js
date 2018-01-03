
import React, { Component } from 'react';

function Nav(props) {
    return (
        <div style={props.parentStyle}>
            {props.links.map((link, index) => {
                return <a key={index} style={props.childStyle}href={link.href}>{link.name}</a>
            })}
        </div>
    )
}
export default Nav;


// import React, { Component } from "react";

// function Nav(props) {
//     return (
//         <div parentStyle={props.parentStyle}>
//             {props.links.map((link) => {
//                 return <a href={link.href}>{link.name}</a>
//                 return <a style={props.parentStyle}></a>
//             })}
//         </div>
//     )
// }

// export default Nav;


