import React from 'react'
import './Image.css'

function Image(props) {
    return (
        <div className="img-box">
            <img src={props.imgUrl} alt={props.caption}/>
        </div>
    )
}

export default Image
