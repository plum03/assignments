import React from 'react'
import Image from './Image'
import images from '../../shared/images.json'
import './Gallery.css'

function Gallery(props) {
    return (
        <div className="gallery">
            {images.map((image) => {
                return (
                    <Image {...image}></Image>
                )
            })}
            
        </div>
    )
}

export default Gallery
