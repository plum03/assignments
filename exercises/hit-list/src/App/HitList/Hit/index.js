import React from 'react'
import './Hit.css'

function Hit(props) {
    let {name, image} = props

    
    let style = {
        backgroundImage: `url(${props.image})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // backgroundColor: "white",
        // border: "10px solid whitesmoke",
        // color: "hotpink",
        // fontFamily: "Arial",
        // fontSize: "28px",
        // width: "40%",
        // height: "300px",
        // display: "inline-block",
        // margin: "10px"
    }
    return (
        <div className="hits-wrapper" style={style}>
            <div className="hit" >
                <h1 className="hit-name">{name}</h1>
            </div>

        </div>
            
    )
}

export default Hit
