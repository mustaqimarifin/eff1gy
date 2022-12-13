export {}
import { TrackEvent } from '~/lib/umami'
declare global {
  interface Window {
    umami: any
  }
}
