import React from 'react'

import './BlogPost.css'

export default function BlogPost (props) {
    let { title, subtitle, author, date } = props;
    return(
        <div className="blog-post">
            <div className="titles">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="author">
                <p>Posted by <a href="#">{author}</a> on {date}</p>
            </div>
        </div>
    )
}