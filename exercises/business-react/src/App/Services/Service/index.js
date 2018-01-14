import React from 'react'

function Service(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Service
