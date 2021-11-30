import React from 'react'

export default function Link(props) {
    return (
        <div>
            <a href={props.href} target={props.target}>
                Link to this
            </a>
        </div>
    )
}
