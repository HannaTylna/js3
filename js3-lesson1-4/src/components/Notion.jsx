import React from 'react'



export default function Notion(props) {
    return (
        <div>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            {
                <ul>
                    <li>{props.text} - {props.deadline} - {props.isCompleted}</li>
                </ul>
            }
        </div>
    )
}
