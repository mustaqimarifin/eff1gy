import Image from 'next/image'
import React from 'react'

const DickPics = (props) => {
  const { src, alt, blurDataURL } = props
  return (
    <div className="drop-shadow-sm filter">
      <Image
        src={require(`public/static/img/${src}`)}
        alt={alt}
        blurDataURL={blurDataURL}
        placeholder={'blur' ?? 'empty'}
        className="rounded-lg"
      />
    </div>
  )
}

export default DickPics
