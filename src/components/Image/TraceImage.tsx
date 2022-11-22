import Image from 'next/image'
import React, { useState } from 'react'

//import { useInView } from 'react-intersection-observer';

export default function TraceImage({ imgSrc, imgTrace, ...rest }) {
  //const { ref, inView, entry } = useInView()

  const [isLoaded, setLoaded] = useState(false)

  return (
    <div
      className=" overflow-hidden "
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        <Image
          aria-hidden="true"
          src={imgTrace}
          fill
          priority
          onLoadingComplete={() => setLoaded(false)}
          alt={''}
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'saturate(104%) brightness(103%) hue-rotate(3.142rad)',
            // transform: '3s',
            opacity: isLoaded ? '0' : '1',
            transition: 'opacity 2s ',
            transitionDelay: '2000ms',
          }}
        />
      </div>
      <div
        style={{
          opacity: isLoaded ? '1' : '0',
          transition: 'opacity 3s ',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
        }}
      >
        <Image
          src={imgSrc}
          onLoadingComplete={() => setLoaded(true)}
          alt={''}
          className="object-cover overflow-hidden transition ease-in-out"
          {...rest}
          //
        />
      </div>
    </div>
  )
}
