import React from 'react';
import Header from "../../App/Header";


export default function Home(props) {
    return (
        <div>
            {/* brand and slogan are being fed through as props to Header */}
            <Header brand="Nike" slogan="Just do it."/>
            <p>This is my homepage and this is the way I like it.</p>
        </div>
    )
}