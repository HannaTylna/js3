import React from 'react'

export default function ImageItem(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <img 
                src={props.imageURL}
                alt="Something"
                width="700px"
            />
            <p>{props.description}</p>
        </div>
    )
}
