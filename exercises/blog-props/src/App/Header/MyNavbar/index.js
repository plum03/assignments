import React, {Component} from "react";
// import { Navbar, Button } from 'react-bootstrap';

export default function MyNavbar(props) {
    let { name, href } = props;
    return (
        <div>
            <a href={href}>{name}</a>
           
        </div>
    )
}
