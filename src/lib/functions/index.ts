export function XD(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
