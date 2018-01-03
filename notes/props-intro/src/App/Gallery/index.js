import React, { Component } from "react";
import Picture from "./Picture";


function Gallery(props) {

    let picData = [
        {
            caption: "Wow",
            author: "Erica",
            backgroundUrl: "https://cdn.pixabay.com/photo/2017/12/10/13/37/background-3009949_960_720.jpg"
        },
        {
            caption: "Neat",
            author: "Joe",
            backgroundUrl: "https://cdn.pixabay.com/photo/2015/01/13/16/08/tee-598346__340.jpg"
        },
        {
            caption: "Oooh",
            author: "Mary",
            backgroundUrl: "https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001_960_720.jpg"
        },
        {
            caption: "What?",
            author: "Me",
            backgroundUrl:"https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001_960_720.jpg"
        }
    ];
    return(
        <section className="gallery-wrapper">
            {picData.map((picInfo, index) => {
                return <Picture {...picInfo} key={index} ></Picture>
            })}
        </section>
    )
}

export default Gallery;