import { enhanceElement } from './enhanceElement'

export function enhance(arg) {
  if (typeof arg === 'string') {
    enhance(document.querySelectorAll(arg))
  } else if (arg[Symbol.iterator]) {
    for (const element of arg) {
      enhanceElement(element)
    }
  } else {
    enhanceElement(arg)
  }
}
