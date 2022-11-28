import * as React from 'react'

import Button from '~/components/Button'
import { Input } from '~/components/Input'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import {
  useEditUserMutation,
  useGetViewerWithSettingsQuery,
} from '~/graphql/types.generated'
import { validUsername } from '~/lib/validators'

export function UsernameForm() {
  const { data } = useGetViewerWithSettingsQuery()
  const { viewer } = data
  const [name, setUsername] = React.useState('')
  const [isEditing, setIsEditing] = React.useState(false)
  const [error, setError] = React.useState(null)

  const [editUser, editUserResponse] = useEditUserMutation({
    variables: {
      data: {
        name,
      },
    },
    onError(error) {
      // eslint-disable-next-line prettier/prettier
      error
    },
    onCompleted() {
      setIsEditing(false)
    },
  })

  function onSubmit(e) {
    e.preventDefault()
    if (editUserResponse.loading) return
    if (name === viewer.name) return setIsEditing(false)
    if (!validUsername(name)) return setError(true)
    editUser()
  }

  function handleUsernameChange(e) {
    setError(false)
    setUsername(e.target.value)
  }

  return (
    <div className="space-y-2">
      <p className="text-primary font-semibold">Username</p>

      {viewer.name && (
        <div className="text-primary flex space-x-2">
          <span>@{viewer.name}</span>
          <span>·</span>
          <button
            className="cursor-pointer font-medium text-blue-500"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      )}

      {isEditing && (
        <form className="space-y-2" onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder={'Choose a name'}
            value={name}
            autoFocus
            onChange={handleUsernameChange}
          />
          {error && (
            <p className={`text-xs text-red-500`}>
              Usernames should be between 4 and 16 characters and only have
              numbers, letters, or underscores.
            </p>
          )}
          <p className="text-quaternary text-xs">
            Updating your name will break any existing links to your profile, so
            you know, don’t do it too often.
          </p>
          <div className="flex justify-between">
            <Button type="submit">
              {editUserResponse.loading ? <LoadingSpinner /> : 'Save name'}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
