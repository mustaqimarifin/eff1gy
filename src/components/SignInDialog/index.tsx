'use client'
import * as React from 'react'

import { DialogComponent } from '~/components/Dialog'
import { signIn } from '~/lib/auth'

import { GhostButton } from '../Button'
import { SignInDialogContent } from './SignInDialogContent'

function signInButton() {
  return (
    <GhostButton
      href={`/api/auth/signin`}
      onClick={(e) => {
        e.preventDefault()
        signIn()
      }}
      style={{ width: '100%' }}>
      Sign in
    </GhostButton>
  )
}

export function SignInDialog({
  children = null,
  trigger = null,
  style = null,
}) {
  return (
    <DialogComponent
      trigger={trigger}
      title={'Sign In'}
      modalContent={() => <SignInDialogContent />}>
      {children ? ({ openModal }) => children({ openModal }) : null}
    </DialogComponent>
  )
}
