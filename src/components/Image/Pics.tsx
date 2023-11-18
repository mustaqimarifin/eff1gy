import Image from 'next/image'
import React from 'react'

const DickPics = (props) => {
    const { src } = props
    return (
        <div className="aspect-square overflow-hidden drop-shadow-sm filter">
            <Image
                src={src}
                alt=""
                width={300}
                height={300}
                className="rounded-lg"
            />
        </div>
    )
}

export default DickPics
