import React from 'react'

export default function Heading(props) {
    console.log(props);

    return (
        <h1>
            {props.title} <small>{props.subTitle}</small>
        </h1>
    )
}
