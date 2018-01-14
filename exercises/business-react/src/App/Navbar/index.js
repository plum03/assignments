import React from 'react'
import './Navbar.css'
import links from '../../shared/links.json'
import Navlink from './Navlink'

function Navbar(props) {
    return (
        <div className="nav-wrapper">
            <div className="brand">
                <a href="#">Company Name</a>
            </div>
            <div className="nav-links">
                {links.map((link, i) => {
                    return (
                        <Navlink {...link}></Navlink>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar
