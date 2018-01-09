import React from 'react'
import BlogPost from './BlogPost';
import blogs from '../../shared/blogs.json';

export default function BlogList (props) {
    return (
        <div>
            {blogs.map((blog, i) => {
                return (
                    <BlogPost {...blog} key={i}></BlogPost>
                )
            })}
            
        </div>
    )
}