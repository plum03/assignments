import React, { Component } from "react";
import Nav from "./Nav";
import Gallery from "./Gallery";
import "./index.css";

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    },
    {
        href: "/contact",
        name: "Contact"
    }];
    return (
        <div>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "blue" }}
                childStyle={{ color: "yellow" }}>
            </Nav>
            <Gallery></Gallery>
            
        </div>
    )
}

export default App;

// import React, { Component } from "react";
// import components to be used in App
// import Nav from "./Nav";

// function App(props) {
//     let links = [{
//         href: "./home",
//         name: "Home"
//     },
//     {
//         href: "./about",
//         name: "About"
//     },
//     {
//         href: "./contact",
//         name: "Contact"
//     }
// ];
//     return (
//         <div>
//             provide PROPS for Nav component here:
//             <Nav 
//                 links={links} 
//                 parentStyle={{backgroundColor: "maroon"}}
//                 childStyle={{color: "white"}}>
//             </Nav>
//             <Nav links={["Home", "About", "Contact", "Login"]}></Nav>
//             <Nav links={["Clothing", "Kitchen", "Office Supplies", "Bedroom"]}></Nav>
//             <h1>Welcome to {props.location}!</h1>
//             <h2>{props.desc}</h2>
//             <p>Would you care for a {props.item}?</p>
//         </div>
//     )
// }
// export default App;