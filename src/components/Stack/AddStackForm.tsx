import * as React from 'react'
import { useRouter } from 'next/router'
import { ErrorAlert } from '~/components/Alert'
import Button from '~/components/Button'
import { Input, Textarea } from '~/components/Input'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { TagPicker } from '~/components/Tag/TagPicker'
import { GET_STACKS } from '~/graphql/queries/stack'
import { useAddStackMutation } from '~/graphql/typeSlut'

//import { StackImageUploader } from './StackImageUploader'

export function AddStackForm({ closeModal }) {
  const [url, setUrl] = React.useState('')
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [tag, setTag] = React.useState(null)
  const [image, setImage] = React.useState('')
  const [isSaving, setIsSaving] = React.useState(false)
  const [error, setError] = React.useState('')

  const router = useRouter()

  const [handleAddStack] = useAddStackMutation({
    onCompleted: ({ addStack: { slug } }) => {
      closeModal()
      return router.push(`/stack/${slug}`)
    },
    refetchQueries: [GET_STACKS],
    onError({ message }) {
      const clean = message.replace('GraphQL error:', '')
      setError(clean)
      setUrl('')
      setIsSaving(false)
    },
  })

  function onSubmit(e) {
    e.preventDefault()
    setIsSaving(true)
    return handleAddStack({
      variables: { data: { url, name, description, image, tag } },
    })
  }

  function onImageChange(e) {
    error && setError('')
    return setImage(e.target.value)
  }

  function onUrlChange(e) {
    error && setError('')
    return setUrl(e.target.value)
  }

  function onNameChange(e) {
    error && setError('')
    return setName(e.target.value)
  }

  function onDescriptionChange(e) {
    error && setError('')
    return setDescription(e.target.value)
  }

  function onKeyDown(e) {
    if (e.keyCode === 13 && e.metaKey) {
      return onSubmit(e)
    }
  }

  const tagFilter = (t) => {
    const allowedTags = ['software', 'gear', 'plugins']
    return allowedTags.indexOf(t.name) >= 0
  }

  return (
    <div className="space-y-3 p-4">
      {/*       <StackImageUploader stack={null} onImageUploaded={onImageUploaded} />
       */}{' '}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TagPicker filter={tagFilter} defaultValue={tag} onChange={setTag} />
        <Input
          type="text"
          placeholder="/static/img/..."
          value={image}
          onChange={onImageChange}
          onKeyDown={onKeyDown}
        />
        <Input
          type="text"
          placeholder="Add a url..."
          value={url}
          onChange={onUrlChange}
          onKeyDown={onKeyDown}
        />

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onNameChange}
          onKeyDown={onKeyDown}
        />
        <Textarea
          rows={4}
          placeholder="Description"
          value={description}
          onChange={onDescriptionChange}
          onKeyDown={onKeyDown}
        />
        <div className="flex justify-end">
          <Button disabled={!url} onClick={onSubmit}>
            {isSaving ? <LoadingSpinner /> : 'Save'}
          </Button>
        </div>
        {error && <ErrorAlert>{error}</ErrorAlert>}
      </form>
    </div>
  )
}
