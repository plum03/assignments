import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    let navStyles = {
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "flex-end",
        backgroundColor: "plum",
        height: "100px",
        borderBottom: "5px solid purple"
    }

    let linkStyle = {
        color: "purple",
        fontSize: "20px",
        padding: "50px",
        textDecoration: "none",
        textTransform: "uppercase",
        fontFamily: "Arial"
    }

    return (
        <div className="nav" style={navStyles}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/services" style={linkStyle}>Services</Link>
        </div>
    )
}