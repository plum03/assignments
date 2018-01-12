import React from 'react'

import './BlogPost.css'

export default function BlogPost (props) {
    let { title, subtitle, author, date } = props;
    return(
        <div className="blog-post">

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>Posted by {author} on {date}</p>
        </div>
    )
}