import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'

export default function Section(props) {
    return (
        <div>
            <Heading 
                title={props.title} subTitle={props.subTitle} 
            />
            <Paragraph text={props.text} />
        </div>
    )
}
