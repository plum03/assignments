import React from 'react';
import MyNavbar from "./MyNavbar";


export default function Header(props) {

    let links = [
        {
            name: "Start Bootstrap",
            href: "#"
        },
        {
            name: "Home",
            href: "#"
        }, {
            name: "About",
            href: "#"
        }, {
            name: "Sample Post",
            href: "#"
        }, {
            name: "Contact",
            href: "#"
        }
    ]

    return (
        <section>
            {links.map((link, i) =>{
                return (
                    <MyNavbar {...link} key={i}></MyNavbar>
                )
            })}

            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
            
        </section>
    )
}