import React from 'react'
import BlogPost from './BlogPost';
import blogs from '../../shared/blogs.json';
import './BlogList.css';

export default function BlogList (props) {
    return (
        <div className="blog-wrapper">
            {blogs.map((blog, i) => {
                return (
                    <BlogPost {...blog} key={i}></BlogPost>
                )
            })}
            
        </div>
    )
}