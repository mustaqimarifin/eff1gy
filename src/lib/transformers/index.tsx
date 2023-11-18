//@ts-nocheck
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Props = {
  timestamp?: number | string
  locale?: string
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
}

export function timestampToCleanTime({
  timestamp = null,
  locale = 'en-us',
  year = 'numeric',
  month = 'long',
  day = 'numeric',
}: Props) {
  const date = timestamp ? new Date(timestamp) : new Date()

  const formatted = date.toLocaleDateString(locale, {
    year,
    month,
    day,
  })

  const raw = date.toISOString()

  return {
    formatted,
    raw,
  }
}

/*!
 * Deep merge two or more objects or arrays.
 * (c) 2023 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {*} ...objs  The arrays or objects to merge
 * @returns {*}          The merged arrays or objects
 */
export function deepMerge(...objs) {
  /**
   * Get the object type
   * @param  {*}       obj The object
   * @return {String}      The object type
   */
  function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
  }

  /**
   * Deep merge two objects
   * @return {Object}
   */
  function mergeObj(clone, obj) {
    for (const [key, value] of Object.entries(obj)) {
      const type = getType(value)
      if (
        clone[key] !== undefined &&
        getType(clone[key]) === type &&
        ['array', 'object'].includes(type)
      ) {
        clone[key] = deepMerge(clone[key], value)
      } else {
        clone[key] = structuredClone(value)
      }
    }
  }

  // Create a clone of the first item in the objs array
  let clone = structuredClone(objs.shift())

  // Loop through each item
  for (const obj of objs) {
    // Get the object type
    const type = getType(obj)

    // If the current item isn't the same type as the clone, replace it
    if (getType(clone) !== type) {
      clone = structuredClone(obj)
      continue
    }

    // Otherwise, merge
    if (type === 'array') {
      clone = [...clone, ...structuredClone(obj)]
    } else if (type === 'object') {
      mergeObj(clone, obj)
    } else {
      clone = obj
    }
  }

  return clone
}
