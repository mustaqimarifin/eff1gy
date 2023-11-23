/* eslint-disable no-useless-escape */
import crypto from 'crypto'
//import ky from 'ky'
export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except for -
    .replace(/--+/g, '-') // Replace multiple - with single -
}

export const sha256 = (
  x: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
) => {
  const buffer = Buffer.isBuffer(x) ? x : Buffer.from(x)
  return crypto.createHash('sha256').update(buffer).digest('base64')
}

//export const fetcher = url => ky.get(url).then(res => res.json())
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}

export function emailRX(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function nameRX(name: string): boolean {
  const re = /^(?=[a-zA-Z0-9_]{4,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/
  return re.test(String(name))
}

export function urlRX(string: string | URL): boolean {
  try {
    new URL(string)
    return true
  } catch (err) {
    return false
  }
}
