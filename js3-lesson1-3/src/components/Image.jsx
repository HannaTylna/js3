import React from 'react'

export default function Image(props) {
    return (
        <img
            src={props.imageSrc}
            alt={props.imageAlt}
            width={props.imageWidth}
        />
    )
}
