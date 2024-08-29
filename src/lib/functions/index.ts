/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-new */

/**
 * if you wanna get fancy... url safety is your responsibility
 */
//const range = "+-¥∑µ§†ƒ0123456789abcdefghijklmnopqrstuvwxyz"
//export const nanoid = customAlphabet(range, 5)

export function slugify(str: string) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
		.replace(/-{2,}/g, "-") // Replace multiple - with single -
}

/* export const sha256 = (
  x: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>
) => {
  const buffer = Buffer.isBuffer(x) ? x : Buffer.from(x)
  return createHash('sha256').update(buffer).digest('base64')
}
 */

export async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit,
): Promise<JSON> {
	const res = await fetch(input, init)
	return res.json()
}

/* export function emailRX(email: string): boolean {
  const re
		= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
  return re.test(String(email).toLowerCase())
}
 */
export function emailRX(email: string): boolean {
	const re =
		/^(?:[^<>()[\]\\.,;:\s@"]+(?:\.[^<>()[\]\\.,;:\s@"]+)*|".+")@(?:\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]|(?:[a-z\-0-9]+\.)+[a-z]{2,})$/i
	return re.test(String(email).toLowerCase())
}

export function nameRX(name: string): boolean {
	const re = /^(?=\w{4,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/
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
