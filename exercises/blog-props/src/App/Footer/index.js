import React, {Component} from 'react';
import './Footer.css'

export default function Footer (props) {
    return (
        <div className="footer">
            <div className="icons">
                <p className="twt"></p>
                <p className="fa"></p>
                <p className="git"></p>
            </div>
            <div className="copy">
            <p>Copyright&copy; Your Website 2018</p>
            </div>
           
        </div>
    )
}
