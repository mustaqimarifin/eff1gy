/**
 * Access session storage on browser
 */
export function getFromSessionStorage(key: string) {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key)
  }
  return null
}

export function getFromLocalStorage(key: string) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}
