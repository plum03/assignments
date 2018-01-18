import React from 'react'

function Footer(props) {

    let footStyles = {
        textAlign: "center",
        color: "plum",
        backgroundColor: "purple",
        fontFamily: "Courier",
        padding: "10px 0"
    }

    return (
        <div style={footStyles} className="footer">
            <h5>Company Name</h5>
            <p>Street Address</p>
            <p>City, State, Zip</p>
            <p>Phone Number</p>

        </div>
    )
}

export default Footer
