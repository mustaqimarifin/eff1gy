import Image from 'next/image'
import * as React from 'react'
import { Compass } from 'react-feather'

import { LoadingSpinner } from '~/components/LoadingSpinner'

import Button from '../Button'
import { TitleBar } from './TitleBar'

function ContentContainer(props) {
  return (
    <div
      className="mx-auto w-full max-w-xs md:max-w-3xl px-2 py-12  md:px-8 "
      {...props}
    />
  )
}

interface DetailContainerProps {
  children: React.ReactNode
}

const Container = React.forwardRef<HTMLDivElement, DetailContainerProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        id="main"
        className="relative flex md:max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-gray-900"
        {...props}
      />
    )
  }
)

function Header(props) {
  return <div className="space-y-3" {...props} />
}

interface TitleProps {
  children: React.ReactNode
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  return <h1 ref={ref} className="text-4xl font-bold " {...props} />
})

function Loading() {
  return (
    <Container>
      <div className="flex flex-1 flex-col items-center justify-center">
        <LoadingSpinner />
      </div>
    </Container>
  )
}

function Null() {
  return (
    <Container>
      <TitleBar title="Not found" />
      <div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
        <Image
          src="/static/clip/brickluke.webp"
          width={200}
          height={200}
          alt="brickluke"
          className="justify-center"
        />
        <Compass className="text-secondary" size={32} />
        <div className="flex flex-col space-y-1">
          <p className="text-primary font-semibold">
            What you seek does not exist.
          </p>

          <p className="text-tertiary">
            Maybe this link is broken. Maybe something was deleted, or moved. In
            any case, there’s nothing to see here...
          </p>
        </div>
        <Button href="/">Go home</Button>
      </div>
    </Container>
  )
}

export const Detail = {
  Container,
  ContentContainer,
  Header,
  Title,
  Loading,
  Null,
}
