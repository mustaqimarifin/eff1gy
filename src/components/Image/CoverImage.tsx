import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export default function CoverImage({ src, blurDataUrl }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="max-w-3xl  mb-6 content-center overflow-hidden justify-center md:rounded-lg   ">
      <Image
        src={src}
        alt={''}
        width={680}
        height={503}
        className={clsx(
          ' flex object-cover object-top justify-center items-center w-full aspect-[21/9] lg:max-w-7xl mx-auto duration-700 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
        blurDataURL={blurDataUrl}
      />
      {/*       <figcaption className="text-center ">
        {caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {caption}
          </span>
        )}
      </figcaption> */}
    </div>
  )
}
