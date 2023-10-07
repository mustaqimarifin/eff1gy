import * as React from "react"
import Button from "~/components/Button"
import { Input } from "~/components/Input"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import {
  useEditUserMutation,
  useGetViewerWithSettingsQuery,
  type GetViewerWithSettingsQuery,
} from "~/graphql/typeSlut"
import { nameRX } from "~/lib/functions"

export function UsernameForm(props: {
  viewer: GetViewerWithSettingsQuery["viewer"]
}) {
  const { viewer } = props
  const [name, setUsername] = React.useState("")
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
    if (!nameRX(name)) return setError(true)
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
            className="text-active cursor-pointer font-medium"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
      )}

      {isEditing && (
        <form className="space-y-2" onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder={"Choose a name"}
            value={name}
            autoFocus
            onChange={handleUsernameChange}
          />
          {error && (
            <p className={`text-error text-xs`}>
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
              {editUserResponse.loading ? <LoadingSpinner /> : "Save name"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
