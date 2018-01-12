import React from 'react';
import MyNavbar from "./MyNavbar";
import './Header.css';

export default function Header(props) {

    let links = [
        {
            name: "Start Bootstrap",
            href: "#"
        }, {
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
        <section className="header">
            <div className="overlay">
                <div className="nav-wrapper">
                    <div className="brand">
                        <MyNavbar></MyNavbar>
                    </div>
                    <div className="links">
                        {links.map((link, i) => {
                            return (
                                <MyNavbar {...link} key={i}></MyNavbar>
                            )
                        })}
                    </div>
                </div>

                <div className="header-text">
                    <h1 className="head-title">Clean Blog</h1>
                    <h2 className="head-sub">A Blog Theme by Start Bootstrap</h2>
                </div>

            </div>

        </section>
    )
}