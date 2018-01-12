import React, {Component} from "react";
// import { Navbar, Button } from 'react-bootstrap';
import './MyNavbar.css'

export default function MyNavbar(props) {
    let { name, href } = props;
    return (
        <div className="nav-link">
            <a href={href}>{name}</a> 
        </div>
        
    )
}
