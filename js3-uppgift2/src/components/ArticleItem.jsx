import React from 'react'
import Heading from './Heading'
import Image from './Image'
import Text from './Paragraph'

export default function ArticleItem(props) {
    return (
        <div>
            <Heading
                heading={props.heading}
            />
            <Image 
                src={props.src}
                alt={props.alt}
                width={props.width}
            />
            <Text 
                text={props.text}
            />
        </div>
    )
}
