import React from 'react'

function ContactCard(props) {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
        </div>
    )
}

export default ContactCard
