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

    return (
        <div>
            {categories.map((category, i) => {
                    return (
                        <Link to={`/${category.id}`} key={category.id}>{category.name}</Link>
                    )
                })}
        </div>
    )
}

export default Navbar
