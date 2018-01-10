import React from 'react'
import services from '../../shared/services.json'

function Service(props) {
    // console.log(props.match.params.index);
    // console.log(props) and use inspect to find the value we are looking for (i.e. props.match.params.index)
    let { index } = props.match.params;
    let {name, price, description} = services[index];

    return (
        <div>
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <p>Description: {description}</p>
        </div>
    )
}

export default Service
