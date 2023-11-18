'use client'

import { Link2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { PrimaryButton } from '~/components/Button'
import Comments from '~/components/Comments'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { Tags } from '~/components/Tag'
import { CommentType, useGetStackQuery } from '~/graphql/typeSlut'

import { MarkdownRenderer } from '../MarkdownRenderer'
import { SignInDialog } from '../SignInDialog'
import { StackActions } from './StackActions'
import { StackUsedBy } from './StackUsedBy'

export function StackDetail({ stack }) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  /*     const { data, loading, error } = useGetStackQuery({
        variables: { slug },
    })
 */

  return (
    <>
      <Detail.Container data-cy="stack-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/stack'}
          magicTitle
          title={stack.name}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={<StackActions stack={stack} />}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <div className="flex items-center space-x-6">
              <Link href={stack.url} passHref className="inline-block ">
                <Image
                  priority
                  //src={`/static/img/stack/${stack.image}`}
                  src={stack.image}
                  width={60}
                  height={60}
                  alt={`${stack.name} icon`}
                  className={'rounded-md object-cover'}
                />
              </Link>
              <div className="flex flex-col space-y-1">
                <Link href={stack.url} passHref className="block">
                  <Detail.Title ref={titleRef}>{stack.name}</Detail.Title>
                </Link>
                {stack.tags && stack.tags.length > 0 && (
                  <Tags tags={stack.tags} />
                )}
              </div>
            </div>

            <MarkdownRenderer
              className="text-primary prose"
              children={stack.description}
              variant="comment"
            />

            <PrimaryButton
              size="large"
              href={stack.url}
              target="_blank"
              rel="noopener noreferrer">
              <Link2Icon />
              <span>Visit</span>
            </PrimaryButton>

            <SignInDialog>
              {({ openModal }) => (
                <StackUsedBy triggerSignIn={openModal} stack={stack} />
              )}
            </SignInDialog>
          </Detail.Header>
        </Detail.ContentContainer>

        <Comments refId={stack.id} type={CommentType.Stack} />
      </Detail.Container>
    </>
  )
}
