import React from 'react'

function Superhero(props) {
    return (
        <div className="superhero" >
            <h1 onClick={() => handleClick(props.index)}>{props.name}</h1>
            

        </div>
    )
}

export default Superhero
