import { enhanceElement } from './enhanceElement'

export function enhanceAll() {
  for (const element of document.querySelectorAll('code')) {
    enhanceElement(element)
  }
}
