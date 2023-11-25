import { useContext } from 'react'

import { Switch } from '~/components/Switch'

import { PostEditorContext } from './PostEditor'

export function PreviewSwitch() {
  const context = useContext(PostEditorContext)
  const { isPreviewing, setIsPreviewing } = context

  return (
    <Switch
      label={'Preview'}
      defaultEnabled={isPreviewing}
      onChange={(val) => setIsPreviewing(val)}
    />
  )
}
