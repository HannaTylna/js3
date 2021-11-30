import React from 'react'
import Button from './Button'
import Heading2 from './Heading2'
import Image from './Image'
import Input from './Input'
import Link from './Link'

export default function Section2(props) {
    return (
        <div>
            <Heading2 
                title={props.title}
            />
            <Image
                src={props.src}
                alt={props.alt}
                width={props.width}
            />
            <Button
                text={props.text}
            />
            <Input 
                type={props.type}
                placeholder={props.placeholder}
            />
            <Link
                href={props.href}
                target={props.target}
            />

        </div>
    )
}
