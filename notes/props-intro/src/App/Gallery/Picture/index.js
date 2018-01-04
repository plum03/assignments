import React, { Component } from "react";
import './index.css';
import PropTypes from "prop-types";

function Picture(props) {
    let parentStyles = {
        backgroundImage: `url(${props.backgroundUrl})`, // Use backticks for shorthand string concat
    };
    return (
        <div className="picture-wrapper" style={parentStyles}>
            <h5>{props.caption}</h5>
            <p>{props.author}</p>
        </div>
    )
}
export default Picture;

// Assign PropTypes for added error-checking

Picture.propTypes = {
    backgroundUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}

Picture.defaultProps = {
    backgroundUrl: "http://skypenglish4u.com/wp-content/uploads/2014/04/whoops_a_daisy-01-1.jpg",
    author: "Karma",
    caption: "Oops... Something went wrong!"
}