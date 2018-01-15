import React from 'react'

function DisplayComponent(props) {
    return (
        <div>
            <button onClick={props.handleClick} >
                {props.isVisible ? "Hide" : "Show"}
            </button>
            {props.isVisible && <h1></h1>}
        </div>
    )
}

export default DisplayComponent
