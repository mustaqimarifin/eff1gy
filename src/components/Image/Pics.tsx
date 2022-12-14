import Image from 'next/image'
import React from 'react'

const DickPics = (props) => {
  const { src, alt, blurDataURL } = props
  return (
    <div className="filter drop-shadow-sm">
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
