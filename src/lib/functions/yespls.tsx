import { URL } from 'url'
import ky from 'ky'

export const yespls = async (url) => await ky(url).json()
