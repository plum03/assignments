import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    let categories = [
        {name:"Animated Movies", id:"2"}, 
       {name: "Biology", id:"8"}, 
        {name: "Random Trivia", id:"24"}, 
        {name: "TV Trivia", id:"25"}, 
        {name: "Who Sings It (2000)", id:"35"}, 
        {name: "Vampire", id:"32"}
    ];

    let style = {
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "whitesmoke",
        fontSize: "22px",
        padding: "3%",
        alignItems: "center",
        fontWeight: "700",
        marginBottom: "2%"
        

    }

    let linkStyle = {
        textDecoration: "none"
    }

    return (
        <div className="category-wrapper" >
        <div style={style}>
            {categories.map((category, i) => {
                    return (
                        <Link to={`/${category.id}`} key={category.id} style={linkStyle} >{category.name}</Link>
                    )
                })}
        </div>
        </div>
    )
}

export default Navbar
