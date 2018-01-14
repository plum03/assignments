import React from 'react'
import './Navlink.css'

function Navlink(props) {
    return (
        <div className="link">
            <a href={props.href}>{props.name}</a>
        </div>
    )
}

export default Navlink
