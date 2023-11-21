'use client'
import { signIn } from 'next-auth/react'
import * as React from 'react'

import { DialogComponent } from '~/components/Dialog'

import { GhostButton } from '../Button'
import { SignInDialogContent } from './SignInDialogContent'

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
