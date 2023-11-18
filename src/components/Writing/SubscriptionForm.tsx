import { useState } from 'react'

import { PrimaryButton } from '~/components/Button'
import { Input } from '~/components/Input'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { validEmail } from '~/lib/validators'

import { nuts } from '../Provider/Toaster'

export function WritingSubscriptionForm({ defaultValue = '' }) {
  const [email, setEmail] = useState(defaultValue)
  const [status, setStatus] = useState('default')

  function onChange(e) {
    nuts.info('default')
    return setEmail(e.target.value.trim())
  }

  async function submit(e) {
    e.preventDefault()
    nuts.loading('saving')

    if (!validEmail(email)) {
      nuts.loading('saving')

      return nuts.error('invalid-email')
    }

    await fetch(`/api/newsletter`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    }).then((res) => res.json())

    nuts.success('success')
  }

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col space-y-4">
        <p className="text-tertiary">
          Get an email whenever I publish new posts. I also publish semi-regular
          newsletters containing links to interesting articles about design,
          technology, and startups.
        </p>
        <form
          data-cy="subscribe-hn-form"
          onSubmit={submit}
          className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-3">
          <label className="md:col-span-2">
            <span className="sr-only">Email address</span>
            <Input
              value={email}
              disabled={status === 'loading'}
              onChange={onChange}
              placeholder="Email address"
              type="email"
              name="email"
            />
          </label>
          <PrimaryButton
            onClick={submit}
            disabled={status === 'saving' || !email}
            type="submit">
            {status === 'saving' ? <LoadingSpinner /> : 'Subscribe'}
          </PrimaryButton>
        </form>
        <p className="text-quaternary text-sm">
          Unsubscribe at any time. Powered by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.getrevue.co/profile/brian_lovin"
            className="text-primary">
            Revue
          </a>
          .
        </p>
        {status === 'invalid-email' &&
          nuts.warning(' That email doesn’t look valid, try another?')}
        {status === 'success' &&
          nuts.success(
            `A confirmation email was sent to ${email} — go click the link!`
          )}
      </div>
    </div>
  )
}
