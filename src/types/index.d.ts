import { TrackEvent } from '~/lib/umami'

export {}

declare global {
  interface Window {
    umami: any
  }
}
