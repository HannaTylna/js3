import React from 'react'
import Date from './Date'
import Description from './Description'
import Heading from './Heading'
import Image from './Image'

export default function ImageItem(props) {
    return (
        <div>
            <Heading 
                heading={props.heading}
            />
            <Image
                imageSrc={props.imageSrc}
                imageAlt={props.imageAlt}
                imageWidth={props.imageWidth}
            />
            <Description description={props.description} />
            <Date date={props.date} />
        </div>
    )
}
