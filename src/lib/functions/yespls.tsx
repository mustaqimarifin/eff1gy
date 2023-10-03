import ky from 'ky'
import { URL } from 'url'

export const yespls = async (url) => await ky(url).json()
